# Imported the dependencies needed:
import pandas as pd
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask_cors import CORS

# Imported Flask, jsonify, request, and render_template to create and run the API:
from flask import Flask, jsonify, request, render_template

# Set up the database:
engine = create_engine("postgresql+psycopg2://postgres:postgres@localhost/NOMBRE_DE_LA_BASE_DE_DATOS")

# Reflected the existing database into a new model:
Base = automap_base()

# Reflected the tables:
Base.prepare(autoload_with=engine)

Base.classes.keys()

# Saved the references to the main table:
Nonvoter = Base.classes.responses

# Created an app making sure to pass __name__:
app = Flask(__name__)
CORS(app)

# Flask routes (there are eight):

# 1. Main route:
# Defined the end point:
@app.route("/")


# To run the app:
if __name__ == "__main__":
    app.run(debug=True)