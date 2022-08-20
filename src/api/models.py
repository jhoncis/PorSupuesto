from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), unique=True, nullable=False)
    typeuser = db.Column(db.String(1), unique=True,nullable=False)
    letraidentificacion = db.Column(db.String(1), unique=False,nullable=False)
    indentificacion = db.Column(db.Integer(10), unique=True,nullable=False)
    name = db.Column(db.String(10), unique=False,nullable=False)
    direccion = db.Column(db.String(120), unique=False,nullable=False)
    region = db.Column(db.String(10), unique=False,nullable=False)
    photo = db.Column(db.String(1000), unique=False,nullable=False)
    phone = db.Column(db.Integer(15), unique=True,nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "direccion": self.direccion,
            "region": self.region,
            "phone": self.phone,
            "photo": self.photo,
            # do not serialize the password, its a security breach
        }

class Proveedores(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_usuario = db.Column(db.Integer, (db.ForeignKey('user.id')))
    #usuario = db.relationship("User")
    personacontacto = db.Column(db.String(120), unique=True, nullable=False)
    id_categoria = db.Column(db.Integer, (db.ForeignKey('Categoria.id')))
    solvente = db.Column(db.Boolean(), unique=False, nullable=False)
    descripcion = db.Column(db.String(300), unique=True, nullable=False) #Breve descripcion de
    

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
        
class Ranking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_ranking = db.Column(db.Integer, (db.ForeignKey('Proveedores.id')))
    #id_usuario = db.Column(db.Integer, (db.ForeignKey('user.id')))
    id_categoria = db.Column(db.Integer, (db.ForeignKey('Categoria.id')))
    calificacion = db.Column(db.Integer, unique=True, nullable = False)
    comentario = db.Column(db.String(300), unique=True, nullable=False)

    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Categoria(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    descripcion_categoria = db.Column(db.String(300), unique=True, nullable=False)
    descrion_subcategoria = db.Column(db.String(300), unique=True, nullable=False)

    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
