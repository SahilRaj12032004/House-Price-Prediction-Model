import { useState } from "react";

export default function HousePricePredictor() {
  const [formData, setFormData] = useState({
    GrLivArea: "",
    BedroomAbvGr: "",
    TotalBath: "",
    LotArea: "",
    YearBuilt: "",
    OverallQual: "",
  });
  const [predictedPrice, setPredictedPrice] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if any field is empty
    for (const key in formData) {
      if (formData[key].trim() === "") {
        alert("Please fill all fields before predicting!");
        return;
      }
    }

    // Convert input values to numbers
    const { GrLivArea, BedroomAbvGr, TotalBath, LotArea, YearBuilt, OverallQual } = formData;
    const coefficients = [72.15, -8314.21, -8462.63, 0.78, 585.69, 23373.58];
    const intercept = -1193970.05;

    const price =
      coefficients[0] * Number(GrLivArea) +
      coefficients[1] * Number(BedroomAbvGr) +
      coefficients[2] * Number(TotalBath) +
      coefficients[3] * Number(LotArea) +
      coefficients[4] * Number(YearBuilt) +
      coefficients[5] * Number(OverallQual) +
      intercept;

    setPredictedPrice(price.toFixed(2));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-lg font-semibold text-center text-gray-800">House Price Predictor</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          {[
            { name: "GrLivArea", label: "Living Area (sq.ft)" },
            { name: "BedroomAbvGr", label: "Number of Bedrooms" },
            { name: "TotalBath", label: "Total Bathrooms" },
            { name: "LotArea", label: "Lot Area (sq.ft)" },
            { name: "YearBuilt", label: "Year Built" },
            { name: "OverallQual", label: "Overall Quality (1-10)" },
          ].map(({ name, label }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700">{label}</label>
              <input
                type="number"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                required
              />
            </div>
          ))}
          
          <button type="submit" className="w-full p-2 text-white transition bg-indigo-500 rounded-md hover:bg-indigo-600">
            Predict Price
          </button>
        </form>
        {predictedPrice && (
          <div className="mt-4 text-lg font-semibold text-center text-green-600">
            Predicted Price: ${predictedPrice}
          </div>
        )}
      </div>
    </div>
  );
}