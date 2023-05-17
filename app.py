from flask import Flask, jsonify, render_template, request
import joblib
import os
import numpy as np

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route('/predict', methods=['POST', 'get'])
def result():
    month = float(request.form['month'])
    day = float(request.form['day'])
    year = float(request.form['year'])
    clothing_item = float(request.form['Clothing item'])
    clothing_color = float(request.form['Clothing_color'])
    clothing_size = float(request.form['Clothing_size'])
    customer_city = float(request.form['Customer City'])
    clothing_brand = float(request.form['Clothing_brand'])
    customers_age_category = float(request.form['Customers_age_category'])

    x = np.array([[month, day, year, clothing_item, clothing_color, clothing_size, customer_city, clothing_brand,
                   customers_age_category]])
    model_path = r'D:\ML\Delpoy\Dep1\Models\cv.sav'

    model = joblib.load(model_path)


    pred = model.predict(x)

    return jsonify({'Prediction': float(pred)})


if __name__ == "__main__":
    app.run(debug=True, port=4589)
