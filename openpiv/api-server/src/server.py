from flask import Flask
from flask_restful import Api, Resource, reqparse, request
import openpiv_handler


app = Flask(__name__)
api = Api(app)

class Openpiv(Resource):
    
    def post(self):
        req_body = request.get_json()
        data = openpiv_handler.two_images()
        #args = reqparse.RequestParser()
        return 'python success ' + data, 200

    
      
api.add_resource(Openpiv, "/openpiv")

app.run(port=4000, debug=True)