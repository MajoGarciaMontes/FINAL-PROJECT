# Imported the dependencies needed:
import pandas as pd
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask_cors import CORS
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import VotingClassifier, RandomForestClassifier
from sklearn.metrics import precision_score, recall_score, confusion_matrix, roc_curve, precision_recall_curve, accuracy_score, classification_report
import pickle5

# Imported Flask, jsonify, request, and render_template to create and run the API:
from flask import Flask, jsonify, request, render_template

# Set up the database:
engine = create_engine("postgresql+psycopg2://postgres:pleycode@localhost/breast_cancer")

# Reflected the existing database into a new model:
Base = automap_base()

# Reflected the tables:
Base.prepare(autoload_with=engine)

Base.classes.keys()

# Saved the references to the main table:
tumor_measures = Base.classes.tumor_measures

# Created an app making sure to pass __name__:
app = Flask(__name__)
CORS(app)

# Flask routes:

# 1. Home route:
# Defined the end point:
@app.route("/")
def home():
    print("Welcome to our Project 4 API - Predicting Breast Cancer with Machine Learning")
    return ("Pagina inicio API")



# 2. Inputs processing route for machine learning:

# importar variables (inputs del dashboard) (ahorita cree dummy variables para testing)

@app.route('/api/make-prediction', methods=['POST'])
def make_prediction():
    # Extract input values from the request:
    input_radius_mean = request.form.get('input_radius_mean')
    input_texture_mean = request.form.get('input_texture_mean')
    input_perimeter_mean = request.form.get('input_perimeter_mean')
    input_area_mean = request.form.get('input_area_mean')
    input_smoothness_mean = request.form.get('input_smoothness_mean')
    input_compactness_mean = request.form.get('input_compactness_mean')
    input_concavity_mean = request.form.get('input_concavity_mean')
    input_concave_points_mean = request.form.get('input_concave_points_mean')
    input_symmetry_mean = request.form.get('input_symmetry_mean')
    input_fractal_dimension_mean = request.form.get('input_fractal_dimension_mean')
    input_radius_se = request.form.get('input_radius_se')
    input_texture_se = request.form.get('input_texture_se')
    input_perimeter_se = request.form.get('input_perimeter_se')
    input_area_se = request.form.get('input_area_se')
    input_smoothness_se = request.form.get('input_smoothness_se')
    input_compactness_se = request.form.get('input_compactness_se')
    input_concavity_se = request.form.get('input_concavity_se')
    input_concave_points_se = request.form.get('input_concave_points_se')
    input_symmetry_se = request.form.get('input_symmetry_se')
    input_fractal_dimension_se = request.form.get('input_fractal_dimension_se')
    input_radius_worst = request.form.get('input_radius_worst')
    input_texture_worst = request.form.get('input_texture_worst')
    input_perimeter_worst = request.form.get('input_perimeter_worst')
    input_area_worst = request.form.get('input_area_worst')
    input_smoothness_worst = request.form.get('input_smoothness_worst')
    input_compactness_worst = request.form.get('input_compactness_worst')
    input_concavity_worst = request.form.get('input_concavity_worst')
    input_concave_points_worst = request.form.get('input_concave_points_worst')
    input_symmetry_worst = request.form.get('input_symmetry_worst')
    input_fractal_dimension_worst = request.form.get('input_fractal_dimension_worst')

    # Process the input values and execute the code:
    # 1. Convert all the input values into a list:
    input_l = [input_radius_mean,
               input_texture_mean,
               input_perimeter_mean,
               input_area_mean,
               input_smoothness_mean,
               input_compactness_mean,
               input_concavity_mean,
               input_concave_points_mean,
               input_symmetry_mean,
               input_fractal_dimension_mean,
               input_radius_se,
               input_texture_se, 
               input_perimeter_se,
               input_area_se,
               input_smoothness_se,
               input_compactness_se,
               input_concavity_se,
               input_concave_points_se,
               input_symmetry_se,
               input_fractal_dimension_se,
               input_radius_worst,
               input_texture_worst,
               input_perimeter_worst,
               input_area_worst,
               input_smoothness_worst,
               input_compactness_worst,
               input_concavity_worst,
               input_concave_points_worst,
               input_symmetry_worst,
               input_fractal_dimension_worst]

    # 2. Convert the list into a Pandas DataFrame:
    input_df = pd.DataFrame(input_l, columns=['inputs'])
    input_df = input_df.T

    # 3. Load the scaler of our trained model with 'Pickle5' and transform our DataFrame:
    scaler_filename = 'ML_model/rf_scaler.pkl'
    with open(scaler_filename, 'rb') as file1:
        loaded_scaler = pickle5.load(file1)
    X_transformed = loaded_scaler.transform(input_df)

    # 4. Load our trained random forest model with 'Pickle5':
    model_filename = 'ML_model/rf_model.pkl'  # Adjust the file path accordingly
    with open(model_filename, 'rb') as file2:
        loaded_model = pickle5.load(file2)

    # 5. Make a prediction with our trained model and the input DataFrame:
    prediction = loaded_model.predict(X_transformed)

    # Generate a response with the prediction made:
    result = {'result': prediction}
    return jsonify(result)


# 3. Scores route:
@app.route("/api/model-scores")
def model_scores():
    scores_d = {'breast_cancer_model_prediction_scores':
                {'accuracy': 98,
                'precision': {'benign': 99, 'malignant': 96},
                'recall': {'benign': 98, 'malignant': 98},
                'f1-score': {'benign': 98, 'malignant': 97}}}
    return jsonify(scores_d)


# To run the app:
if __name__ == "__main__":
    app.run(debug=True)