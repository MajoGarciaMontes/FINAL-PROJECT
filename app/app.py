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
    return (Pagina inicio API)



# Main route:

# importar variables (inputs del dashboard) (ahorita cree dummy variables para testing)
dummy_radius_mean = 19.69
dummy_texture_mean = 21.25
dummy_perimeter_mean = 130.0
dummy_area_mean = 1203.0
dummy_smoothness_mean = 0.1096
dummy_compactness_mean = 0.1599
dummy_concavity_mean = 0.1974
dummy_concave_points_mean = 0.1279
dummy_symmetry_mean = 0.2069
dummy_fractal_dimension_mean = 0.05999
dummy_radius_se = 0.7456
dummy_texture_se = 0.7869
dummy_perimeter_se = 4.585
dummy_area_se = 94.03
dummy_smoothness_se = 0.00615
dummy_compactness_se = 0.04006
dummy_concavity_se = 0.03832
dummy_concave_points_se = 0.02058
dummy_symmetry_se = 0.0225
dummy_fractal_dimension_se = 0.004571
dummy_radius_worst = 23.57
dummy_texture_worst = 25.53
dummy_perimeter_worst = 152.5
dummy_area_worst = 1709.0
dummy_smoothness_worst = 0.1444
dummy_compactness_worst = 0.4245
dummy_concavity_worst = 0.4504
dummy_concave_points_worst = 0.243
dummy_symmetry_worst = 0.3613
dummy_fractal_dimension_worst = 0.08758

# darles el formato adecuado a las variables
input_list = [dummy_radius_mean,
        dummy_texture_mean,
        dummy_perimeter_mean,
        dummy_area_mean,
        dummy_smoothness_mean,
        dummy_compactness_mean,
        dummy_concavity_mean,
        dummy_concave_points_mean,
        dummy_symmetry_mean,
        dummy_fractal_dimension_mean,
        dummy_radius_se,
        dummy_texture_se,
        dummy_perimeter_se,
        dummy_area_se,
        dummy_smoothness_se,
        dummy_compactness_se,
        dummy_concavity_se,
        dummy_concave_points_se,
        dummy_symmetry_se,
        dummy_fractal_dimension_se,
        dummy_radius_worst,
        dummy_texture_worst,
        dummy_perimeter_worst,
        dummy_area_worst,
        dummy_smoothness_worst,
        dummy_compactness_worst,
        dummy_concavity_worst,
        dummy_concave_points_worst,
        dummy_symmetry_worst,
        dummy_fractal_dimension_worst]

# importar modelo RF con pickle (scaler)

input_list_df = pd.DataFrame(input_list, columns=['inputs'])
input_list_df = input_list_df.T

# Load the scaler and apply it to the input_array
# Load the saved scaler using pickle
scaler_filename = '/content/rf_scaler.pkl'
with open(scaler_filename, 'rb') as file:
    loaded_scaler = pickle5.load(file)
X_transformed = loaded_scaler.transform(input_list_df)

# Load the saved model using pickle
model_filename = '/content/rf_model.pkl'  # Adjust the file path accordingly
with open(model_filename, 'rb') as file:
    loaded_model = pickle5.load(file)

# Make predictions
prediction = loaded_model.predict(X_transformed)

prediction



# # Load the saved model using pickle
# file_path = '/content/rf_model.pkl'

# with open(file_path, 'rb') as file:
#   loaded_model = pickle5.load(file)

# # hacer predicciones
# prediction = loaded_model.predict(X_scaled)

# # Send the prediction classification as JSON response
# jsonify({"prediction": prediction})
# darles el formato adecuado a las variables

# importar modelo RF con pickle (scaler)

# hacer predicciones

# mandar la clasificacion de la prediccion


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