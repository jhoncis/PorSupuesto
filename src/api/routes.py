"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Proveedores, Ranking, Categoria
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

#Create flask app
api = Blueprint('api', __name__)


# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/loging", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    search = User.query.filter_by(email=email).one_or_none()
    if search != None and search.password == password:
        access_token = create_access_token(identity=email)
        is_proveedor = Proveedores.query.filter_by(email=email).one_or_none()
        if is_proveedor != None:
            return jsonify({"user": search.serialize(), "token": access_token, "rol": "proveedor"}), 200
        else:
            return jsonify({"user": search.serialize(), "token": access_token, "rol": "cliente"}), 200
    else:
        return jsonify({"msg": "Ese usuario no existe"}), 401

@api.route("/user",  methods=["POST","GET"])
def handle_user():
    if(request.method=='GET'):
        all_user = user.query.all()
        return jsonify(
            [ user.serialize() for user in all_user]
        ), 200
    else:
        email = request.json.get("email", None)
        typeuser = request.json.get("typeuser", None)
        letraidentificacion = request.json.get("letraidentificacion", None)
        indentificacion = request.json.get("indentificacion", None)
        name = request.json.get("name", None)
        direccion = request.json.get("direccion", None)
        region = request.json.get("region", None)
        photo = request.json.get("photo", None)
        phone = request.json.get("phone", None)
        password = request.json.get("password", None)
        if email == None:
            return 'Falta el email!', 400
        if typeuser == None:
            return 'Falta el tipo de Usuario!', 400
        if letraidentificacion == None:
            return 'Falta letra de identificacion!', 400
        if indentificacion == None:
            return 'Falta numero de identificacion!', 400
        if name == None:
            return 'Falta el nombre!', 400
        if direccion == None:
            return 'Falta la direccion!', 400
        if region == None:
            return 'Falta la region!', 400
        if photo == None:
            return 'Falta la foto!', 400
        if phone == None:
            return 'Falta el telefono!', 400
        if password == None:
            return 'Falta la clave!', 400
        else:
            new_row = User.new_user(email, typeuser ,letraidentificacion, indentificacion, name, direccion, region, photo, phone, password)
            if new_row == None:
                return 'Un error ha ocurrido!', 500
            else:
                return jsonify(new_row.serialize()), 200

@api.route("/proveedores",  methods=["POST","GET"])
def handle_proveedor():
    if(request.method=='GET'):
        all_proveedor = Proveedores.query.all()
        return jsonify(
            [ proveedor.serialize() for proveedor in all_proveedor]
        ), 200
    else:
        email = request.json.get("email", None)
        typeuser = request.json.get("typeuser", None)
        letraidentificacion = request.json.get("letraidentificacion", None)
        indentificacion = request.json.get("indentificacion", None)
        name = request.json.get("name", None)
        direccion = request.json.get("direccion", None)
        region = request.json.get("region", None)
        photo = request.json.get("photo", None)
        phone = request.json.get("phone", None)
        password = request.json.get("password", None)
        personacontacto = request.json.get("personacontacto", None)
        id_categoria = request.json.get("id_categoria", None)
        solvente = request.json.get("solvente", None)
        descripcion = request.json.get("descripcion", None)
        if email == None:
            return 'Falta el email!', 400
        if typeuser == None:
            return 'Falta el tipo de Usuario!', 400
        if letraidentificacion == None:
            return 'Falta letra de identificacion!', 400
        if indentificacion == None:
            return 'Falta numero de identificacion!', 400
        if name == None:
            return 'Falta el nombre!', 400
        if direccion == None:
            return 'Falta la direccion!', 400
        if region == None:
            return 'Falta la region!', 400
        if photo == None:
            return 'Falta la foto!', 400
        if phone == None:
            return 'Falta el telefono!', 400
        if password == None:
            return 'Falta la clave!', 400
        if personacontacto == None:
            return 'Falta la persona de Contacto!', 400
        if id_categoria == None:
            return 'Falta la persona de Contacto!', 400
        if solvente == None:
            return 'Falta la Solvencia!', 400
        if descripcion == None:
            return 'Falta la descripcion!', 400
        else:
            new_row = Proveedores.new_proveedor(email, typeuser, letraidentificacion, indentificacion, name, direccion, region, photo, phone, password, personacontacto, id_categoria, solvente, descripcion)
            if new_row == None:
                return 'Un error ha ocurrido!', 500
            else:
                return jsonify(new_row.serialize()), 200

@api.route("/ranking",  methods=["POST","GET"]) 
def handle_ranking():
    if(request.method=='GET'):
        all_ranking = Ranking.query.all()
        return jsonify(
            [ ranking.serialize() for ranking in all_ranking]
        ), 200
    else:
        usuario = request.json.get("usuario", None)
        calificacion = request.json.get("calificacion", None)
        comentario = request.json.get("comentario", None)
        if usuario == None:
            return 'No se encuentra el usuario!', 400
        if calificacion == None:
            return 'No esta calificado!', 400
        if comentario == None:
            return 'No tiene comentario!', 400
        else:
            search = User.query.get(usuario)
            if search != None:
                new_row = Ranking.new_ranking(search, calificacion, comentario)
                if new_row == None:
                    return 'Un error ha ocurrido!', 500
                else:
                    return jsonify(new_row.serialize()), 200
            return "Ese usuario no existe", 404

@api.route("/categoria",  methods=["POST","GET"]) 
def handle_categoria():
    if(request.method=='GET'):
        all_categoria = Categoria.query.all()
        return jsonify(
            [ categoria.serialize() for categoria in all_categoria]
        ), 200
    else:
        descripcion_categoria = request.json.get("descripcion_categoria", None)
        descripcion_subcategoria = request.json.get("descripcion_subcategoria", None)
        if descripcion_categoria == None:
            return 'No existe la categoria!', 400
        if descripcion_subcategoria == None:
            return 'No existe la subcategoria!', 400
        else:
            new_row = Categoria.new_categoria(descripcion_categoria, descripcion_subcategoria)
            if new_row == None:
                return 'Un error ha ocurrido!', 500
            else:
                return jsonify(new_row.serialize()), 200



    