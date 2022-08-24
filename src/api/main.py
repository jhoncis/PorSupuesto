"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from utils import APIException, generate_sitemap
from admin import setup_admin
from models import db, User
#from models import Person

app = Flask(__name__)
app.url_map.strict_slashes = False
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DB_CONNECTION_STRING')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db)
db.init_app(app)
CORS(app)
setup_admin(app)

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

@app.route('/user', methods=['GET','POST'])
def handle_user():
    if(request.method=='GET'):
        all_user = User.query.all()
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

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3000))
    app.run(host='0.0.0.0', port=PORT, debug=False)
