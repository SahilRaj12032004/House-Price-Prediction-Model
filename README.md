🏡 House Price Prediction Model

 📌 Overview

This project is a **House Price Prediction Model** that leverages **Linear Regression** to estimate property prices based on key real estate features such as square footage, number of bedrooms, bathrooms, lot size, construction year, and overall quality.

 🚀 Features

- Predicts house prices based on **6 key factors**:
  - **Living Area (sq. ft.)**
  - **Number of Bedrooms**
  - **Total Bathrooms (Full + Half)**
  - **Lot Size (sq. ft.)**
  - **Year Built**
  - **Overall Quality Rating** (Scale of 1-10)
- **User-friendly Interface**: Enter property details and get instant price estimates.
- **Simple & Lightweight**: Built with `React.js` for UI and `scikit-learn` for modeling.

 📂 Dataset

- The model is trained on **Ames Housing Dataset**, a well-known dataset for real estate price prediction.
- Key columns used: `GrLivArea`, `BedroomAbvGr`, `TotalBath`, `LotArea`, `YearBuilt`, `OverallQual`.

 ⚙️ Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/house-price-prediction.git
   cd house-price-prediction
   ```
2. Install dependencies:
   ```sh
   pip install -r requirements.txt  # For backend (if needed)
   npm install  # For frontend (React)
   ```
3. Start the development server:
   ```sh
   npm start
   ```

 📊 Model Performance

- **Mean Squared Error (MSE):** `1.66B`
- **R² Score:** `78.3%`
- **Key Coefficients:**
  - `GrLivArea`: `$72.15 per sq. ft.`
  - `BedroomAbvGr`: `- $8,314.21 per bedroom`
  - `TotalBath`: `- $8,462.63 per bathroom`
  - `LotArea`: `$0.78 per sq. ft.`
  - `YearBuilt`: `$585.69 per year`
  - `OverallQual`: `$23,373.58 per quality point`

 🔥 How It Works

1. Enter the required house details.
2. Click **Predict Price**.
3. The model instantly estimates the house price.

 💡 Future Enhancements

- Improve accuracy with **advanced ML techniques** (XGBoost, Random Forest, etc.)
- Add more features like `Garage Size`, `Neighborhood`, `Basement Area`
- Deploy as a **live web app** with Flask/FastAPI backend

 🤝 Contributing

Pull requests are welcome! Feel free to **open an issue** if you have any suggestions or improvements.

 📜 License

This project is licensed under the **MIT License**.

---

🔗 **Live Demo (if deployed)**: [Your Hosted App URL



