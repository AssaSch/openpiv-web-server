from flask import Flask
from flask_restful import Api, Resource, reqparse, request
import openpiv_handler


app = Flask(__name__)
api = Api(app)

class Openpiv(Resource):
    
    def post(self):
        req_body = request.get_json()
        # print(req_body['image_1']['data'])
        data = openpiv_handler.two_images(req_body['image_1']['data'],
                req_body['image_2']['data'])
        return 'python success ' + data, 200

    
      
api.add_resource(Openpiv, "/openpiv")

app.run(port=4000, debug=True)