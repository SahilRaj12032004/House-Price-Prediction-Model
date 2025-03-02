import { useState } from "react";

export default function HousePricePredictor() {
  const [inputs, setInputs] = useState({
    GrLivArea: "",
    BedroomAbvGr: "",
    TotalBath: "",
    LotArea: "",
    YearBuilt: "",
    OverallQual: "",
  });
  const [predictedPrice, setPredictedPrice] = useState(null);

  const coefficients = {
    GrLivArea: 72.15,
    BedroomAbvGr: -8314.21,
    TotalBath: -8462.63,
    LotArea: 0.78,
    YearBuilt: 585.69,
    OverallQual: 23373.58,
    intercept: -1193970.05,
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const calculatePrice = async () => {
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });

    const data = await response.json();
    setPredictedPrice(data.predicted_price.toFixed(2));
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">House Price Predictor</h2>
      {Object.keys(inputs).map((key) => (
        <div key={key}>
          <label className="block text-sm font-medium text-gray-700">
            {key}
          </label>
          <input
            type="number"
            name={key}
            value={inputs[key]}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
      ))}
      <button
        onClick={calculatePrice}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Predict Price
      </button>
      {predictedPrice !== null && (
        <div className="text-lg font-semibold text-green-600">
          Predicted Price: ${predictedPrice}
        </div>
      )}
    </div>
  );
}
