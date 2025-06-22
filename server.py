from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

sensor_data = {}

@app.route('/')
def home():
    return send_from_directory('.', 'index.html')

@app.route('/data', methods=['GET'])
def data():
    return jsonify(sensor_data)

@app.route('/update', methods=['POST'])
def update():
    global sensor_data
    sensor_data = request.json
    return 'Data received', 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
