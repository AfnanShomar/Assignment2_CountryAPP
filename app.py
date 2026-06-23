from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from dotenv import load_dotenv
import os

load_dotenv()
app = Flask(__name__)
CORS(app)

APIKEY = os.getenv("API_KEY")
@app.route("/api/country")
def country():
    country_name = request.args.get("name")

    response = requests.get(
        f"https://api.restcountries.com/countries/v5?q={country_name}",
        headers={
            "Authorization": f"Bearer {APIKEY}"
        }
    )
    print(response.json())
    return jsonify(response.json())

if __name__ == "__main__":
    app.run(port=5000, debug=True)