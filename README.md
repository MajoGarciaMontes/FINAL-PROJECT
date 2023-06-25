
# Breast cancer prediction model (Machine Lerning Algorithm)

## Authors

Daniel R. Murillo Antuna: [@dan-murillo](https://www.github.com/dan-murillo)<br>
Luis Paul Garay Acosta: [@PaulGaray777](https://github.com/PaulGaray777)<br>
María José García: [@MajoGarciaMontes](https://github.com/MajoGarciaMontes)<br>
Roberto Gerónimo Barrón Olvera: [@barronr03](https://github.com/barronr03)


## Repository and project description
Healthcare is a field that can be strongly supported by data analytics and visualization projects, we now have the opportunity to utilized this technologies to better diagnosing a possible brest cancer ailment. We focus on the development and implementation of a machine learning algorithm trained with a dataset containing information about malign and benign tumors. The project intend to deliver a powerful tool that can aid medical professionals in making informed decisions to patients by predicting tumor classification with high accuracy.
Our proposal is to develop a Machine Learning model aimed to learn through several breast cancer variables (30) that measure tumors, in order to predict the probability of developing breast cancer with great reliability.
These variables include clinical attributes such as diagnosis, radius, texture, perimeter, area, smoothness, compactness, concavity, symmmetry, fractal dimension, among others. Furthermore, the results of the machine learning algorithm will be presented in an user-friendly dashboard. The dashboard will provide an interactive interface, that includes fun facts, input values, reliability in the model indicators and the predction. Medical professionals can  receive instantaneous predictions about tumor classification (benign, malignant) this will help making accurate decisions regarding further diagnostics and treatment planning. 


### Our objectives:


### Personal reasons why we chose this topic:


### Our project's rationale:


### Finding "the" dataset:
According to the National Cancer Institute, ‘a woman born today has about a 1 in 8 chance of being diagnosed with breast cancer at some time during her life’. That is a very high chance! Therefore, we must have better models that predict breast cancer at an early stage. For this project, the team decided to work on improving the screening for breast cancer with Machine Learning models. Breast cancer is a disease that can significantly impact the lives of many women and can be deadly if not detected and treated early. Moreover, the costs of having more advanced tests done in order to determine whether a tumor is benign or malignant can go up exponentially, which means that not every patient will be able to have them done.
Hence, we want to develop an app that doctors can easily use to input specific patient data, and the app will classify the patient's tumor into one of two categories: ‘benign’ or ‘malignant’. This app will be trained with intelligent models and fed data of correct previously made diagnoses. It will be accurate and precise, and it could be a great option for doctors to use before prescribing patients more expensive tests that the latter might not be able to afford.

### ETL: 
    1. Data cleansing of the original dataset.
    2. Database creation (SQL).


### The *Breast cancer prediction model dashboard* project displays:

This repository showcases a dashboard that portrays the answer to 2 principal questions: What classification fits the patient? (benign / malignant tumor) and What is the accuracy of the classification? The main function of the dashboard is to make a prediction based in the 30 variables input data. The building of the dashboard went through different stages:

#### Project proposal:
1. Title: Breast cancer prediction model (Machine Lerning Algorithm). <-- **
2. Team members: Roberto Barrón, Luis Paul Garay, Alonso Lozano and Daniel Murillo. 
3. Project description/outline: 
4. Reearch question to answer: What classification fits the patient? (benign / malignant tumor) and What is the accuracy of the classification? <--- *Question answered*
5. Dataset to be used: Breast Cancer Wisconsin (Diagnostic) Data Set, https://www.kaggle.com/datasets/uciml/breast-cancer-wisconsin-data/code <--- *Dataset used*
6. Rough breakdown of tasks: <--- *Accurate*
- Visual inspirations and dashboard sketch.
- Data cleansing of the original dataset.
- Database creation (SQL)
- Creation of the API.
- Dashboard coding (JavaScript)
- User testing.
- Presentation.

#### Project development and changes:
This is the final sketch of the visualizations we'd like to create:
![image](https://github.com/MajoGarciaMontes/FINAL-PROJECT/blob/main/SKETCH%20OF%20THE%20PROJECT.png)<br>


#### Creating a tailored API:

We used SQL, Python, Pandas, Flask, and Flask-CORS to first, clean the data, then, build an Entity Relationship Diagram (ERD), a schema, and a local database, and last, create an API with personalized routes for each of the questions and data was cleaned. The routes created were the following:
- / <--- *Welcome to our Project 4 API - Predicting Breast Cancer with Machine Learning. This is the main route of the API where the user finds information about all the other routes.*
- /api/make-prediction <--- *This route make the prediction of our ML model with the input data.*
- /api/model-scores <--- *This route send a JSON of our necesary values for dashboarding our priciple reliablity (on the model) indicators.*
All our code is thoroughly commented, so that you understand what each piece is doing.


#### Connecting the API / dashboarding:
*cambiar este texto no lo cambié para que se basen en el*
We used JavaScript and HTML to create the interactive data visualizations mentioned in the previous paragraph. The API integrates Python for efficient data structuring, and restructures the data in a way that the end routes generate the desirable format of the JSONs. More importantly, we restructured the data so that we could compare the answers of three voter categories defined by the researchers of this survey: 'always' —also called *regular voters* in this project— voters or citizens who always vote, 'sporadic' voters or citizens who voted in at least two elections, but fewer than all-but-one, and 'rarely/never' voters —also called *non-voters* in this project— or those who voted in one or none of the elections in which they were eligible to vote. The dashboard lets the user easily filter the charts by those three categories. In order to create those filters, we used functions and [D3.JS](https://d3js.org/) to extract the voter categories and only the objects we needed, which were then turned into arrays to feed the charts. The HTML file was created with the help of [Bootstrap v5.3](https://getbootstrap.com/). Once again, all our code is thoroughly commented, so that you find it easy to understand and scale.

*poner imagenes del dashboard terminado*


#### User testing:
The 4 members of our team loaded the database, API, and dashboard locally in our computers and together we debugged it until it ran. 

#### Project presentation:
It took place via Zoom on 26th June 2023. You can find the slide deck above and on [this link](). The deck is titled: *'Breask Cancer ML.pdf
'*, and it's a PDF file, so it's very accesible.

### Conclusions:

*explain all the folders ej.*
### The *Resources* folder:

It contains the dashboard images, the files used to clean the data, the full poll and our selected questions, the images that inspired our visualizations, and the original CSV file of the poll.

### The *app* folder:

It has the API we developed, a clean CSV with the data we used, and the HTML and JavaScript codes of our dashboard.

### The *database* folder:

It contains the physical ERD of our database and the schema.

### The *Breask Cancer ML.pdf* file:

It's a PDF file that contains the slide deck of our presentation.

### Final words:

We hope you, user, find our dashboard of good use because we know we have.

## Data Reference
- Breast Cancer Wisconsin (Diagnostic) Data Set: https://www.kaggle.com/datasets/uciml/breast-cancer-wisconsin-data/code 

- UC Irvine "Breast Cancer Data": https://archive.ics.uci.edu/dataset/14/breast+cancer

- Data Hub "Breast Cancer": https://datahub.io/machine-learning/breast-cancer

```#Thank you for reading me!```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)











