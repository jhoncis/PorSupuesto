"""empty message

Revision ID: 511b657efa08
Revises: a45ea18f26ff
Create Date: 2022-08-26 23:45:06.346531

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '511b657efa08'
down_revision = 'a45ea18f26ff'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('ranking_calificacion_key', 'ranking', type_='unique')
    op.drop_constraint('ranking_comentario_key', 'ranking', type_='unique')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint('ranking_comentario_key', 'ranking', ['comentario'])
    op.create_unique_constraint('ranking_calificacion_key', 'ranking', ['calificacion'])
    # ### end Alembic commands ###
