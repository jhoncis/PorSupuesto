"""empty message

Revision ID: 9632c784faa6
Revises: 947db0becd4c
Create Date: 2022-08-22 23:46:09.303579

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9632c784faa6'
down_revision = '947db0becd4c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('categoria',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('descripcion_categoria', sa.String(length=300), nullable=False),
    sa.Column('descrion_subcategoria', sa.String(length=300), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('descrion_subcategoria'),
    sa.UniqueConstraint('descripcion_categoria')
    )
    op.create_table('proveedores',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_usuario', sa.Integer(), nullable=True),
    sa.Column('personacontacto', sa.String(length=120), nullable=False),
    sa.Column('id_categoria', sa.Integer(), nullable=True),
    sa.Column('solvente', sa.Boolean(), nullable=False),
    sa.Column('descripcion', sa.String(length=300), nullable=False),
    sa.ForeignKeyConstraint(['id_categoria'], ['categoria.id'], ),
    sa.ForeignKeyConstraint(['id_usuario'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('descripcion'),
    sa.UniqueConstraint('personacontacto')
    )
    op.create_table('ranking',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_ranking', sa.Integer(), nullable=True),
    sa.Column('id_categoria', sa.Integer(), nullable=True),
    sa.Column('calificacion', sa.Integer(), nullable=False),
    sa.Column('comentario', sa.String(length=300), nullable=False),
    sa.ForeignKeyConstraint(['id_categoria'], ['categoria.id'], ),
    sa.ForeignKeyConstraint(['id_ranking'], ['proveedores.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('calificacion'),
    sa.UniqueConstraint('comentario')
    )
    op.add_column('user', sa.Column('typeuser', sa.String(length=1), nullable=False))
    op.add_column('user', sa.Column('letraidentificacion', sa.String(length=1), nullable=False))
    op.add_column('user', sa.Column('indentificacion', sa.Integer(), nullable=False))
    op.add_column('user', sa.Column('name', sa.String(length=10), nullable=False))
    op.add_column('user', sa.Column('direccion', sa.String(length=120), nullable=False))
    op.add_column('user', sa.Column('region', sa.String(length=10), nullable=False))
    op.add_column('user', sa.Column('photo', sa.String(length=1000), nullable=False))
    op.add_column('user', sa.Column('phone', sa.Integer(), nullable=False))
    op.alter_column('user', 'email',
               existing_type=sa.VARCHAR(length=120),
               type_=sa.String(length=50),
               existing_nullable=False)
    op.create_unique_constraint(None, 'user', ['phone'])
    op.create_unique_constraint(None, 'user', ['typeuser'])
    op.create_unique_constraint(None, 'user', ['indentificacion'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'user', type_='unique')
    op.drop_constraint(None, 'user', type_='unique')
    op.drop_constraint(None, 'user', type_='unique')
    op.alter_column('user', 'email',
               existing_type=sa.String(length=50),
               type_=sa.VARCHAR(length=120),
               existing_nullable=False)
    op.drop_column('user', 'phone')
    op.drop_column('user', 'photo')
    op.drop_column('user', 'region')
    op.drop_column('user', 'direccion')
    op.drop_column('user', 'name')
    op.drop_column('user', 'indentificacion')
    op.drop_column('user', 'letraidentificacion')
    op.drop_column('user', 'typeuser')
    op.drop_table('ranking')
    op.drop_table('proveedores')
    op.drop_table('categoria')
    # ### end Alembic commands ###
