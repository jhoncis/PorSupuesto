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
def create_user():
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

    return "response", 200

def handle_user():
    if(request.method=='GET'):
        all_user = user.query.all()
        return jsonify(
            [ user.serialize() for user in all_user]
        ), 200
    else:
        body = request.json
        if "email" not in body:
            return 'No existe el usuario!', 400
        else:
            new_row = user.new_user(body["email"], body["typeuser"] , body["letraidentificacion"], body["indentificacion"], body["name"], body["direccion"], body["region"], body["photo"], body["phone"], body["password"])
            if new_row == None:
                return 'Un error ha ocurrido!', 500
            else:
                return jsonify(new_row.serialize()), 200

    