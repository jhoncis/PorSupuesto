"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

#Create flask app
api = Blueprint('api', __name__)


# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

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
            return 'No existe el usuario!', 400
        if typeuser == None:
            return 'No existe el usuario!', 400
        if letraidentificacion == None:
            return 'No existe el usuario!', 400
        if indentificacion == None:
            return 'No existe el usuario!', 400
        if name == None:
            return 'No existe el usuario!', 400
        if direccion == None:
            return 'No existe el usuario!', 400
        if region == None:
            return 'No existe el usuario!', 400
        if photo == None:
            return 'No existe el usuario!', 400
        if phone == None:
            return 'No existe el usuario!', 400
        if password == None:
            return 'No existe el usuario!', 400
        else:
            new_row = User.new_user(email, typeuser ,letraidentificacion, indentificacion, name, direccion, region, photo, phone, password)
            if new_row == None:
                return 'Un error ha ocurrido!', 500
            else:
                return jsonify(new_row.serialize()), 200

@api.route("/proveedores",  methods=["POST","GET"])
def handle_proveedor():
    if(request.method=='GET'):
        all_proveedor = proveedor.query.all()
        return jsonify(
            [ proveedor.serialize() for proveedor in all_proveedor]
        ), 200
    else:
        personacontacto = request.json.get("personacontacto", None)
        id_categoria = request.json.get("id_categoria", None)
        solvente = request.json.get("solvente", None)
        descripcion = request.json.get("descripcion", None)
        if solvente == None:
            return 'No tiene dato de solvencia!', 400
        else:
            new_row = proveedor.new_proveedor(body["personacontacto"] , body["id_categoria"], body["solvente"], body["descripcion"])
            if new_row == None:
                return 'Un error ha ocurrido!', 500
            else:
                return jsonify(new_row.serialize()), 200

@api.route("/ranking",  methods=["POST","GET"]) 
def handle_ranking():
    if(request.method=='GET'):
        all_ranking = ranking.query.all()
        return jsonify(
            [ ranking.serialize() for ranking in all_ranking]
        ), 200
    else:
        id_ranking = request.json.get("id_ranking", None)
        id_categoria = request.json.get("id_categoria", None)
        calificacion = request.json.get("calificacion", None)
        comentario = request.json.get("comentario", None)
        if calificacion == None:
            return 'No esta calificado!', 400
        else:
            new_row = ranking.new_ranking(body["id_ranking"], body["id_categoria"] , body["calificacion"], body["comentario"])
            if new_row == None:
                return 'Un error ha ocurrido!', 500
            else:
                return jsonify(new_row.serialize()), 200

@api.route("/categoria",  methods=["POST","GET"]) 
def handle_categoria():
    if(request.method=='GET'):
        all_categoria = categoria.query.all()
        return jsonify(
            [ categoria.serialize() for categoria in all_categoria]
        ), 200
    else:
        descripcion_categoria = request.json.get("descripcion_categoria", None)
        descripcion_subcategoria = request.json.get("descripcion_subcategoria", None)
        if descripcion_categoria == None:
            return 'No existe la categoria!', 400
        else:
            new_row = categoria.new_categoria(body["descripcion_categoria "], body["descripcion_subcategoria"])
            if new_row == None:
                return 'Un error ha ocurrido!', 500
            else:
                return jsonify(new_row.serialize()), 200



    