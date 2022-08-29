"""empty message

Revision ID: 9efe2ac41f70
Revises: 511b657efa08
Create Date: 2022-08-29 12:06:03.864076

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9efe2ac41f70'
down_revision = '511b657efa08'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('user_typeuser_key', 'user', type_='unique')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint('user_typeuser_key', 'user', ['typeuser'])
    # ### end Alembic commands ###
