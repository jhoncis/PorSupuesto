from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True, nullable=False)
    typeuser = db.Column(db.String(1), unique=False,nullable=False)
    #letraidentificacion = db.Column(db.String(1), unique=False,nullable=True)
    indentificacion = db.Column(db.Integer, unique=True, nullable=False)
    name = db.Column(db.String(100), unique=False,nullable=False)
    direccion = db.Column(db.String(120), unique=False,nullable=False)
    region = db.Column(db.String(100), unique=False,nullable=False)
    photo = db.Column(db.String(1000), unique=False,nullable=False)
    phone = db.Column(db.Integer(), unique=True,nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean, unique=False, nullable=True)

    def __init__(self, email, typeuser, indentificacion, name, direccion, region, photo, phone, password):
        self.email = email
        self.typeuser = typeuser
        #self.letraidentificacion = letraidentificacion
        self.indentificacion = indentificacion
        self.name = name
        self.direccion = direccion
        self.region = region
        self.photo = photo
        self.phone = phone
        self.password = password

    @classmethod
    def new_user(cls, email, typeuser, indentificacion, name, direccion, region, photo, phone, password):
        new_user = cls(email, typeuser, indentificacion, name, direccion, region, photo, phone, password)
        db.session.add(new_user)
        try:
            db.session.commit()
            return new_user
        except Exception as error:
            print(error)
            return None

    def update(self, email, typeuser, indentificacion, name, direccion, region, photo, phone, password):
        self.email = email
        self.typeuser = typeuser
        self.letraidentificacion = letraidentificacion
        #self.indentificacion = indentificacion
        self.name = name
        self.direccion = direccion
        self.region = region
        self.photo = photo
        self.phone = phone
        self.password = password
        try:
            db.session.commit()
            return self
        except Exception as error:
            print(error)
            return False

    def delete(self):
        db.session.delete(self)
        try:
            db.session.commit()
            return True
        except Exception as error:
            print(error)
            return False

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "typeuser": self.typeuser,
            #"letraidentificacion": self.letraidentificacion,
            "indentificacion": self.indentificacion,
            "name": self.name,
            "direccion": self.direccion,
            "region": self.region,
            "photo": self.photo,
            "phone": self.phone,
        }


tags = db.Table('Categoria',
    db.Column('categorias_id', db.Integer, db.ForeignKey('categoria.id'), primary_key=True),
    db.Column('proveedores_id', db.Integer, db.ForeignKey('proveedores.id'), primary_key=True)
)

class Proveedores(User):
    id = db.Column(db.Integer, primary_key=True)
    id_usuario = db.Column(db.Integer, (db.ForeignKey('user.id')))
    #usuario = db.relationship("User")
    personacontacto = db.Column(db.String(120), unique=False, nullable=False)
    id_categoria = db.Column(db.Integer, (db.ForeignKey('categoria.id')))
    categoria = db.relationship("Categoria")
    #solvente = db.Column(db.Boolean, unique=False, nullable=True)
    descripcion = db.Column(db.String(300), unique=False, nullable=False) #Breve descripcion de
   
    def __init__(self, email, typeuser,  indentificacion, name, direccion, region, photo, phone, password, personacontacto, id_categoria, descripcion): #,
        super().__init__(email, typeuser,  indentificacion, name, direccion, region, photo, phone, password)
        self.personacontacto = personacontacto
        self.id_categoria = id_categoria
        #self.solvente = solvente
        self.descripcion = descripcion
        
        
    @classmethod
    def new_proveedor(cls, email, typeuser,  indentificacion, name, direccion, region, photo, phone, password, personacontacto,id_categoria, descripcion): #id_categoria,
        new_proveedor = cls(email, typeuser,  indentificacion, name, direccion, region, photo, phone, password, personacontacto, id_categoria, descripcion) #id_categoria,
        db.session.add(new_proveedor)
        try:
            db.session.commit()
            return new_proveedor
        except Exception as error:
            print(error)
            return None

    def update(self, id_usuario, personacontacto, solvente, descripcion):  #id_categoria
        self.id_usuario = id_usuario
        self.personacontacto = personacontacto
        #self.id_categoria = id_categoria
        self.solvente = solvente
        self.descripcion = descripcion
        try:
            db.session.commit()
            return self
        except Exception as error:
            print(error)
            return False

    def delete(self):
        db.session.delete(self)
        try:
            db.session.commit()
            return True
        except Exception as error:
            print(error)
            return False

    def serialize(self):
        return {
            "id": self.id,
            "id_usuario": self.id_usuario,
            "personacontacto": self.personacontacto,
            #"id_categoria": self.id_categoria,
            #"solvente": self.solvente,
            "descripcion": self.descripcion,
            "nombre": self.name,
            "categoria": self.categoria.serialize(),
        }
        
class Ranking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    #id_ranking = db.Column(db.Integer, (db.ForeignKey('proveedores.id')))
    id_usuario = db.Column(db.Integer, (db.ForeignKey('user.id')))
    #id_categoria = db.Column(db.Integer, (db.ForeignKey('categoria.id')))
    calificacion = db.Column(db.Integer, unique=False, nullable = True)
    comentario = db.Column(db.String(300), unique=False, nullable=True)
    usuario = db.relationship("User")

    def __init__(self, usuario, calificacion, comentario):
        self.usuario = usuario
        self.calificacion = calificacion
        self.comentario = comentario

    @classmethod
    def new_ranking(cls, usuario, calificacion, comentario):
        new_ranking = cls(usuario, calificacion, comentario)
        db.session.add(new_ranking)
        try:
            db.session.commit()
            return new_ranking
        except Exception as error:
            print(error)
            return None

    def update(self, id_ranking, id_categoria, calificacion, comentario):
        self.id_ranking = id_ranking
        self.id_categoria = id_categoria
        self.calificacion = calificacion
        self.comentario = comentario
        try:
            db.session.commit()
            return self
        except Exception as error:
            print(error)
            return False

    def delete(self):
        db.session.delete(self)
        try:
            db.session.commit()
            return True
        except Exception as error:
            print(error)
            return False

    def serialize(self): 
        return {
            #"id_ranking": self.id_ranking,
            #"id_categoria": self.id_categoria,
            "id" : self.id,
            "usuario" : self.usuario.serialize(),
            "calificacion": self.calificacion,
            "comentario": self.comentario,
        }


class Categoria(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    descripcion_categoria = db.Column(db.String(300), unique=False, nullable=False)
    descripcion_subcategoria = db.Column(db.String(300), unique=False, nullable=False)

    def __init__(self, descripcion_categoria, descripcion_subcategoria):
        self.descripcion_categoria = descripcion_categoria
        self.descripcion_subcategoria = descripcion_subcategoria

    @classmethod
    def new_categoria(cls, descripcion_categoria, descripcion_subcategoria):
        new_categoria = cls(descripcion_categoria, descripcion_subcategoria)
        db.session.add(new_categoria)
        try:
            db.session.commit()
            return new_categoria
        except Exception as error:
            print(error)
            return None

    def update(self, descripcion_categoria, descripcion_subcategoria):
        self.descripcion_categoria = descripcion_categoria
        self.descripcion_subcategoria = descripcion_subcategoria
        try:
            db.session.commit()
            return self
        except Exception as error:
            print(error)
            return False

    def delete(self):
        db.session.delete(self)
        try:
            db.session.commit()
            return True
        except Exception as error:
            print(error)
            return False

    def serialize(self): 
        return {
            "descripcion_categoria": self.descripcion_categoria,
            "descripcion_subcategoria": self.descripcion_subcategoria,
            "id_categoria": self.id
            
        }


