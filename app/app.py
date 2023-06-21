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
    print("Server received request for 'Home' page...")
    return ("Hola! Como estas?")



# Main route:

# importar variables (inputs del dashboard)
# darles el formato adecuado a las variables

# importar modelo RF con pickle (scaler)

# hacer predicciones

# mandar la clasificacion de la prediccion


# 3. Scores route:
@app.route("/API/model-scores")
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