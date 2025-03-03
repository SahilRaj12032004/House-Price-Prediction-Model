from flask import Flask, request, jsonify
import numpy as np
import joblib
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Allow all domains to access the API

# Load the trained model
model = joblib.load("house_price_model.pkl")

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        features = np.array([
            data["GrLivArea"],
            data["BedroomAbvGr"],
            data["TotalBath"],
            data["LotArea"],
            data["YearBuilt"],
            data["OverallQual"]
        ]).reshape(1, -1)

        prediction = model.predict(features)
        return jsonify({"predicted_price": float(prediction[0])})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

