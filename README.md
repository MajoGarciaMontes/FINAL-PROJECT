
# Breast cancer prediction model app (Machine Learning Algorithm)

## Authors
Daniel R. Murillo Antuna: [@dan-murillo](https://www.github.com/dan-murillo)<br>
Luis Paul Garay Acosta: [@PaulGaray777](https://github.com/PaulGaray777)<br>
María José García: [@MajoGarciaMontes](https://github.com/MajoGarciaMontes)<br>
Roberto Gerónimo Barrón Olvera: [@barronr03](https://github.com/barronr03)


## Repository and project description
Healthcare is a field that can be strongly supported by data analytics and visualization projects, we now have the opportunity to use this technologies for a better diagnosis to a possible breast cancer disease. We focus on the development and implementation of a machine learning algorithm trained with a dataset containing information about malign and benign tumors. The project intend to deliver a powerful tool that can assist medical professionals in making informed decisions to patients by predicting tumor classification with high accuracy.
Our proposal is to develop a Machine Learning model aimed to learn through several breast cancer variables (30) that measure tumors, in order to predict the probability of developing breast cancer with great reliability.
These variables include clinical attributes such as diagnosis, radius, texture, perimeter, area, smoothness, compactness, concavity, symmmetry, fractal dimension, among others. Furthermore, the results of the machine learning algorithm will be presented in an user-friendly dashboard. The dashboard will provide an interactive interface, that includes fun facts, input values, reliability in the model indicators and the predction. Medical professionals can  receive instantaneous predictions about tumor classification (benign, malignant) this will help making accurate decisions regarding further diagnostics and treatment planning. 


### Our objectives:
The objective of this project was divided into three distinct stages. Firstly, the team focused on identifying and preparing a comprehensive database. This involved sourcing relevant data and ensuring its accuracy and completeness.
The second stage entailed the development of a sophisticated machine learning model capable of providing accurate results by analyzing tumor measurements. Implicated leveraging advanced algorithms and techniques to train the model on the collected data, allowing it to make precise predictions or classifications.
Lastly, the team dedicated efforts to create an interactive and visually appealing user interface. They skillfully crafted HTML, JSON, and CSS components to present the gathered information in an intuitive manner. This interface not only facilitated the seamless presentation of results but also empowered users to interact with the data, enabling them to explore and gain insights from the provided information.


### Personal reasons why we chose this topic:
The objective of this project was divided into three distinct stages. Firstly, the team focused on identifying and preparing a comprehensive database. This involved sourcing relevant data and ensuring its accuracy and completeness.
The second stage entailed the development of a sophisticated machine learning model capable of providing accurate results by analyzing tumor measurements. This involved leveraging advanced algorithms and techniques to train the model on the collected data, allowing it to make precise predictions or classifications.
Lastly, the team dedicated efforts to create an interactive and visually appealing user interface. They skillfully crafted HTML, JSON, and CSS components to present the gathered information in an intuitive manner. This interface not only facilitated the seamless presentation of results but also empowered users to interact with the data, enabling them to explore and gain insights from the provided information.


### Our project's rationale:
The rationale for our project lies in addressing the critical need for accurate and efficient breast cancer detection. Breast cancer is a prevalent and potentially life-threatening disease that affects numerous individuals worldwide. The existing diagnostic methods, although effective, can be time-consuming, costly, and may have limitations in terms of accessibility.
Our project aims to leverage the power of machine learning and data analysis to develop a reliable and automated system for breast cancer detection. By training a machine learning model on a comprehensive database of patient information, we seek to enhance the accuracy and efficiency of breast cancer diagnoses. This has the potential to improve patient outcomes, facilitate early detection, and enable timely intervention and treatment.
Additionally, our project aims to bridge the gap in healthcare accessibility. By developing a system that can provide accurate assessments and predictions, we hope to empower healthcare professionals and individuals, particularly in areas with limited access to specialized healthcare facilities. This can potentially bring the benefits of advanced diagnostic capabilities to a wider population, contributing to more equitable healthcare outcomes.


### Finding "the" dataset:
According to the National Cancer Institute, ‘a woman born today has about a 1 in 8 chance of being diagnosed with breast cancer at some time during her life’. That is a very high chance! Therefore, we must have better models that predict breast cancer at an early stage. For this project, the team decided to work on improving the screening for breast cancer with Machine Learning models. Breast cancer is a disease that can significantly impact the lives of many women and can be deadly if not detected and treated early. Moreover, the costs of having more advanced tests done in order to determine whether a tumor is benign or malignant can go up exponentially, which means that not every patient will be able to have them done.
Hence, we want to develop an app that doctors can easily use to input specific patient data, and the app will classify the patient's tumor into one of two categories: ‘benign’ or ‘malignant’. This app will be trained with intelligent models and fed data of correct previously made diagnoses. It will be accurate and precise, and it could be a great option for doctors to use before prescribing patients more expensive tests that the latter might not be able to afford.

### ETL: 
1. Data cleansing of the original dataset.
2. Database creation (SQL).


### The *Breast cancer prediction model dashboard* project displays:
This repository showcases a dashboard that portrays the answer to 2 principal questions: What classification fits the patient? (benign / malignant tumor) and What is the accuracy of the classification? The main function of the dashboard is to make a prediction based in the 30 variables input data. The building of the dashboard went through different stages:

#### Project proposal:
1. Title: Breast cancer prediction model (Machine Lerning Algorithm). 
2. Team members: Roberto Barrón, Luis Paul Garay, Alonso Lozano and Daniel Murillo. 
3. Project description/outline: Breast Cancer Diagnosis Prediction using Machine Learning and Data Visualization

##### Introduction
   - Overview of the project's objective in leveraging data analytics and visualization for breast cancer diagnosis
   - Explanation of the significance of accurate and reliable predictions in healthcare decision-making

##### Data Collection and Preparation
   - Identify and gather a comprehensive dataset containing information on malign and benign tumors
   - Extract relevant variables and clinical attributes related to breast cancer diagnosis
   - Perform data cleaning, preprocessing, and feature engineering as needed

##### Machine Learning Model Development
   - Select appropriate machine learning algorithms (e.g., logistic regression, decision trees, random forests) for classification
   - Split the dataset into training and testing sets
   - Train the machine learning model using the training data
   - Evaluate and optimize the model's performance using suitable metrics and techniques (e.g., cross-validation, hyperparameter tuning)

##### User-Friendly Dashboard Design and Development
   - Create an intuitive and interactive dashboard for presenting the results of the machine learning model
   - Develop user input functionalities for entering tumor measurements and clinical attributes
   - Incorporate data visualization techniques to provide informative and visually appealing representations of the predictions and model reliability indicators
   - Implement a user-friendly interface that facilitates ease of use for medical professionals

##### Testing and Validation
   - Conduct rigorous testing to ensure the accuracy and robustness of the machine learning model
   - Validate the model's predictions against known ground truth values
   - Assess the reliability indicators and performance metrics of the model

##### Documentation and Reporting
   - Document the project's methodology, including data collection, model development, and dashboard design
   - Prepare a comprehensive report summarizing the project's objectives, processes, and outcomes
   - Provide clear instructions on how to use the developed tool and interpret the predictions

##### Conclusion
   - Recap the achievements and potential impact of the project in breast cancer diagnosis
   - Reflect on the implications and benefits of utilizing data analytics and visualization in healthcare
   - Discuss future possibilities for expanding the project's scope or integrating additional features to enhance its utility

Note: This project outline provides a framework for developing a machine learning-based breast cancer diagnosis prediction tool with a user-friendly dashboard. You can customize and expand upon it to suit the specific requirements and resources available to you.

4. Reearch question to answer: What classification fits the patient? (benign / malignant tumor) and What is the accuracy of the classification? <--- *Questions answered*
5. Dataset to be used: Breast Cancer Wisconsin (Diagnostic) Data Set, https://www.kaggle.com/datasets/uciml/breast-cancer-wisconsin-data/code <--- *Dataset used*
6. Rough breakdown of tasks: <--- *Accurate*
- Visual inspirations and dashboard sketch.
- Data cleansing of the original dataset.
- Database creation (SQL)
- Creation of the API.
- Dashboard coding (JavaScript and HTML)
- User testing.
- Presentation.


#### Project development and changes:
This is the final sketch of the visualizations we'd like to create:
![image](https://github.com/MajoGarciaMontes/FINAL-PROJECT/blob/main/Resources/Sketch%20project%20Breast%20Cancer.png)<br>


#### Creating a tailored API:
We used SQL, Python, Pandas, Flask, and Flask-CORS to first, clean the data, then, build an Entity Relationship Diagram (ERD), a schema, and a local database, and last, create an API with personalized routes for each element of the dashboard. The routes created were the following:
- / <--- *Welcome to our Project 4 API - Predicting Breast Cancer with Machine Learning. This is the main route of the API where the user finds information about all the other routes.*
- /api/prediction/ <--- *This route make the prediction of our ML model with the input data.*
- /api/model-scores <--- *This route send a JSON of our necesary values for dashboarding our priciple reliablity (on the model) indicators.*
- /api/index/ <--- *This route returned the HTML file to be able to open it while running the app.*
All our code is thoroughly commented, so that you understand what each piece is doing.


#### Connecting the API / dashboarding:
*cambiar este texto no lo cambié para que se basen en el*
We used JavaScript and HTML to create the interactive data visualizations mentioned in the previous paragraph. The API integrates Python for efficient data structuring, and restructures the data in a way that the end routes generate the desirable format of the JSONs. More importantly, we restructured the data so that we could compare the answers of three voter categories defined by the researchers of this survey: 'always' —also called *regular voters* in this project— voters or citizens who always vote, 'sporadic' voters or citizens who voted in at least two elections, but fewer than all-but-one, and 'rarely/never' voters —also called *non-voters* in this project— or those who voted in one or none of the elections in which they were eligible to vote. The dashboard lets the user easily filter the charts by those three categories. In order to create those filters, we used functions and [D3.JS](https://d3js.org/) to extract the voter categories and only the objects we needed, which were then turned into arrays to feed the charts. The HTML file was created with the help of [Bootstrap v5.3](https://getbootstrap.com/). Once again, all our code is thoroughly commented, so that you find it easy to understand and scale.


#### Dashboard:
![Dashboard1](https://github.com/MajoGarciaMontes/FINAL-PROJECT/assets/120349840/aec9bc23-655a-4c8f-a5e1-3d6f7af88c1b)
![Dashboard2](https://github.com/MajoGarciaMontes/FINAL-PROJECT/assets/120349840/8fa7ce0d-897e-465c-9302-a92b0508ebb2)
![Dashboard3](https://github.com/MajoGarciaMontes/FINAL-PROJECT/assets/120349840/0bae7825-ec13-411b-8032-8529f809396e)
![Dashboard4](https://github.com/MajoGarciaMontes/FINAL-PROJECT/assets/120349840/7e4b48d8-9c19-4fa2-8510-ee5084cd3ef2)
![Dashboard4](https://github.com/MajoGarciaMontes/FINAL-PROJECT/assets/120349840/9e97ebed-6db8-4085-a09a-10ab41258300)
![Dashboard5](https://github.com/MajoGarciaMontes/FINAL-PROJECT/assets/120349840/ea1bd9b5-08f5-460a-902b-0015c88df0ad)
![Dashboard6](https://github.com/MajoGarciaMontes/FINAL-PROJECT/assets/120349840/299a06dd-a74a-4223-8454-5628c33f78ae)
![Dashboard7](https://github.com/MajoGarciaMontes/FINAL-PROJECT/assets/120349840/0cfa512d-8dd7-4cd1-88f5-0108747a8b64)
![Dashboard8](https://github.com/MajoGarciaMontes/FINAL-PROJECT/assets/120349840/51c31e26-498b-44ed-9371-9b41cfa67c13)
![Dashboard9](https://github.com/MajoGarciaMontes/FINAL-PROJECT/assets/120349840/d24033e8-38f2-4900-969f-9e681131da6b)
![Dashboard10](https://github.com/MajoGarciaMontes/FINAL-PROJECT/assets/120349840/70f35097-119c-4d59-bbd6-45ec45106b9e)


#### User testing:
Our team of four members successfully loaded the database, API, and dashboard onto our local computers. Collaboratively, we debugged the code until it ran smoothly. We first focused on constructing the API, defining routes for each element essential to our dashboard's objectives. As we progressed, we transition into coding HTML and Javascript, which allowed us to develop an appealing visual interface for the dashboard. Along the way, we acquired a new skill: utilizing the pickle 5 module for efficient serialization and deserialization of Python objects. This serves as a comprehensive resource to make us understand the implicit steps necessary for the successful development of a robust data analytics project.  

#### Project presentation:
It took place via Zoom on 26th June 2023. You can find the slide deck above and on [this link](). The deck is titled: *'Breask Cancer ML.pdf
'*, and it's a PDF file, so it's very accesible.

#### Conclusions:

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











