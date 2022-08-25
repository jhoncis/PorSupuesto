"""empty message

Revision ID: 0362fcc283dc
Revises: 90f0afdba514
Create Date: 2022-08-24 23:32:48.328116

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0362fcc283dc'
down_revision = '90f0afdba514'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tags',
    sa.Column('categorias_id', sa.Integer(), nullable=False),
    sa.Column('proveedores_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['categorias_id'], ['categoria.id'], ),
    sa.ForeignKeyConstraint(['proveedores_id'], ['proveedores.id'], ),
    sa.PrimaryKeyConstraint('categorias_id', 'proveedores_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tags')
    # ### end Alembic commands ###
