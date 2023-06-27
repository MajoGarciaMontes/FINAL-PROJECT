
# Predicting Breast Cancer app (Machine Learning Algorithm)
We created an app that predicts benign and malignant breast tumors.

## Authors
Daniel R. Murillo Antuna: [@dan-murillo](https://www.github.com/dan-murillo)<br>
Luis Paul Garay Acosta: [@PaulGaray777](https://github.com/PaulGaray777)<br>
María José García: [@MajoGarciaMontes](https://github.com/MajoGarciaMontes)<br>
Roberto Gerónimo Barrón Olvera: [@barronr03](https://github.com/barronr03)


## Project overview and repository description
Healthcare is a field that can receive important contributions from data analytics. One of the most common diseases is unfortunately breast cancer. It is a prevalent and potentially life-threatening disease that affects numerous individuals worldwide. According to [the National Cancer Institute](https://www.cancer.gov/types/breast/risk-fact-sheet), ‘a woman born today has about a 1 in 8 chance of being diagnosed with breast cancer at some time during her life’. That is a very high chance! Although in recent years the screening for breast cancer has shown substantial improvements, it is still time-consuming, costly, and may have limitations in terms of accessibility. Therefore, the screening can still be improved with technology. We had the opportunity to use technology to better predict breast cancer. We focused on the development and implementation of a Machine Learning (ML) algorithm, which was trained with a dataset that contained many observations of relevant variables about breast cancer tumors and a defined classification for each of the observations: benign or malignant tumor. 

### Our objectives:
This project aimed to leverage the power of ML and data analysis to develop a reliable and automated system for breast cancer detection. We wanted to deliver a powerful and quick tool that can assist medical professionals in making informed decisions. We also wanted to develop an app that can predict the type of tumor a patient has with high accuracy. We wanted this app to have a user-friendly dashboard that could be used by any medical professional, but particularly physicians.

### Our rationale:
Scientists have done a great job by improving the accuracy of biopsies and other tests commonly used to detect breast cancer in the last years. However, there are still some obstacles to overcome. First, not everyone has access to them, as not everyone is insured and/or can cover the costs of having those tests done. Second, getting the results usually takes 2 or 3 days or it can sometimes even take a week or longer, so there is much room for improvement in this area. Last, the health system is often overstretched, hence, appointments and tests can be hard to schedule.

### Project proposal:
Our proposal was to develop a ML model that learnt by being fed relevant measures of breast cancer tumors in order to reliably predict whether new data would be related to a benign or a malignant tumor.
The variables with which we would train our model included clinical variables, such as diagnosis, radius, texture, perimeter, area, smoothness, compactness, concavity, symmmetry, and fractal dimension of the tumor. We would make a user-friendly dashboard in a webpage with fun facts, a section to enter tumor-related values, a button to make a prediction based on the entered values, and charts that showed how reliable our model was. Medical professionals would be able to use the app for free, enter their own patient's data, and receive instantaneous predictions about whether the tumor was benign or malignant *—no more "waiting days to get the results"*. Our project would have the potential to improve patient outcomes by further improving early detection and giving access to a reliable cancer prediction tool to any medical professional. We would go about our project by creating a dashboard sketch, doing ETL (data cleansing of the original dataset, and database creation in ```SQL```), training several ML models and choosing one, creating the API with ```Python``` and ```Flask```, coding the dashboard with ```HTML``` and ```JavaScript```, testing the API and the dashboard, and making a presentation of our project.

### Finding the dataset:
We looked for breast-cancer-related datasets in many websites, databases, and search engines, such as [Google Datasearch](https://datasetsearch.research.google.com/), [FiveThirtyEight](https://fivethirtyeight.com/), [Data.gov](https://data.gov/), and [Kaggle](https://www.kaggle.com/). We ended up finding several datasets, but we decided it was best to use the [University of California Irvine's](https://www.kaggle.com/datasets/uciml/breast-cancer-wisconsin-data) because all the variables were clearly defined, rather than defined as ranges of something, and medical professionals can have access to their own patient's data from previous biopsies.

### Our project's development:
After identifying the dataset we would use, we continued our journey with three main questions:
- What is the best ML model to use?
- What classification fits each patient's tumor? (*benign* or *malignant*)
- What is the accuracy of our predictions?
Then, we followed the next steps:

#### 1. Dashboard sketch:
This was the sketch of the visualizations we wanted to create:<br>
![image](https://github.com/MajoGarciaMontes/FINAL-PROJECT/blob/main/Resources/Sketch%20project%20Breast%20Cancer.png)<br>

#### 2. ETL: 
We extracted the dataset from the website and read it in a ```Jupyter Notebook```, we transformed the data by getting rid of unnecessary columns and completely codifying it with numbers —*that meant replacing the string values of some columns*— , and we generated a CSV file with the clean data to be loaded in a ```SQL``` database. We created the database and ended up with two tables: the main table with the patients' observations and a related table, which contained the diagnosis classification strings. 

#### 3. ML models' development:
We knew we needed classification ML models, so we chose a logistic regression model and a random forests model. There were 30 features (the mean, the standard error, and the largest measurement of each of the following variables: radius, texture, perimeter, area, smoothness, compactness, concavity, symmmetry, and fractal dimension of the tumor) and 1 target variable (tumor classification) with which to work. We split the dataset into training and testing sets, train the models, evaluated and optimized each model's performance, and concluded that the random forests model was the best because it had the highest accuracy, precision, and recall scores. At the end, we used ```pickle5``` to save our trained random forests model and scaler. We had never used ```pickle5``` before, so we had to learn it to efficiently serialize and deserialize our model and scaler. Learning that library helped us to better understand the implicit steps necessary for the successful development of a robust data analytics project.  

#### 4. Creating the app:
We used ```Python```, ```Flask```, ```Flask-CORS```, and ```Pandas``` to create an app that had the following 4 routes:
- '/' <--- *This is the home route where the user can find information about all the other routes.*
- '/api/prediction/' <--- *This route makes the prediction by using our trained ML model and scaler; it is not accessible unless the user fills out the form in the main webpage. The prediction is displayed there.*
- '/api/model-scores' <--- *This route sends a JSON of our model's accuracy, precision, recall, and F1 scores.*
- '/api/index/' <--- *This route returns the main webpage that contains information, our dashboard, and the form.*
Although we initially planned to have more data, particularly from the database, to include more graphs in our dashboard, due to time we could not do so. We also thought the main webpage contained plenty of information already, so we didn't add more things to version 1 (V1) of the app.

#### 5. Coding the app's dashboard:
We used ```HTML```, ```JavaScript```, ```Bootstrap v5.3```, and ```Jinja2``` to create the form that medical professionals would fill out to get our model to make a prediction. The dashboard shows the user our model's scores and tells them how accurate and precise it is. The charts were created with ```D3.JS``` and ```Plotly```. We also added icons and information about breast cancer and made it as user-friendly as possible. Due to ethical concerns, we decided to add a text below every prediction, which would remind medical professionals to follow the guidance of the Centers for Disease Control and Prevention (CDC) and follow their gut if they felt their patient needed further testing. We would have liked to have multiple webpages, which would have allowed us to have more graphs, information about our model, and maybe even code, but we thought that what we did was enough for medical professionals. Maybe in the future we could improve the UI/UX of the webpage with the help of an experienced professional.

#### 6. Testing the app:
We conducted rigorous testing of the app to catch bugs. We debugged the code until it ran smoothly and ended up with an optimized V1 of the app.

#### 7. Documentation and reporting:
We didn't consider this step in our project's proposal. Nevertheless, it was necessary. We documented the project's methodology, wrote a summary of our objectives, processes, change of plans, and outcomes in this README file. We also thoroughly commented all the code included in this repository, so that you understand what each line is doing.

#### 8. Finishing our project:
- We recapped the achievements and potential impacts of the project in breast cancer diagnosis.
- We reflected on the implications and benefits of utilizing data analytics and visualization in healthcare
- We discused future possibilities for expanding the project's scope or integrating additional features to enhance its utility.

##### The main webpage with our dashboard:
![image](https://github.com/MajoGarciaMontes/FINAL-PROJECT/blob/main/Resources/Dashboard-main.png)

##### How a *benign tumor* prediction looks like:
![image](https://github.com/MajoGarciaMontes/FINAL-PROJECT/blob/main/Resources/Dashboard-benign-prediction.png)

##### How a *malignant tumor* prediction looks like:
![image](https://github.com/MajoGarciaMontes/FINAL-PROJECT/blob/main/Resources/Dashboard-malignant-prediction.png)

#### Our project's presentation:
We created a slide deck to present this project. It took place via Zoom on 26th June 2023. You can find the slide deck above and on [this link](https://github.com/MajoGarciaMontes/FINAL-PROJECT/blob/main/Predicting_breast_cancer_presentation.pdf). The deck is titled: *Predicting_breast_cancer_presentation.pdf*.

### Conclusions of the project:
Our model demonstrated successful learning from the dataset and exhibited a high level of predictive ability for breast cancer tumors. After training two different models, we observed that the random forest model outperformed the logistic regression model because the former achieved an accuracy rate of 98%. Accuracy represents the proportion of correct predictions made by our model. In this case, our model accurately predicts 98 out of 100 tumors. Other crucial metrics also indicate the effectiveness of our model in making predictions. The precision for benign tumors is significantly high at 99%, demostrating the proportion of accurate positive classifications specifically for benign cases. Similarly, the recall score for malignant tumors is 98%. The potential consequences of misclassifying a malignant tumor as benign are unacceptable. It was our main concern to provide appropriate and timely predictions that could lead to treatment for malignant tumors rather than erroneously send a patient with cancer home.

This project presents a simple yet highly potent solution. Our application has the potential to substantially assist specialists in accurately diagnosing breast cancer tumors and providing treatment sooner. Also, this model can be scaled by using more recent databases to train new models, finding more features that could improve our model's scores, or using a dataset with more observations, which would work well with other models, such as neural networks.

This project helped us understand the pipeline that should be adopted for data analytics projects. It allowed us to conceptualize a correct and reliable approach towards addressing data-related challenges, as well as the necessary creation and organization of tasks for the complete deployment of a valuable data analysis and visualization framework to support decision-making processes.

In the main tree of this repository, you will find:

### The *Database* folder:
It contains the Jupyter Notebook we sued for data cleansing and model training, the physical Entity-Relationship Diagram (ERD) of our database, as well as the SQL schema.

### The *ML_model* folder:
It contains two files: "rf_model.pkl" file and "rf_scaler.pkl" which are our trained model and scaler respectively.

### The *Resources* folder:
It contains the sketch of our dashboard, the final dashboard images, a CSV file of the original database, and a CSV file with the clean data.

### The *app* folder:
It has the app we developed; the *static* folder, which has the *graphs.js*; and the *templates* folder that contains the *base.html* and *index.html*, which work together to give life to our dashboard.

### The *Predicting_breast_cancer_presentation.pdf* file:
It's the slide deck of our presentation. It contains summarized relevant information about our porject.

## Final words
This project outline provides a framework for developing a machine learning-based breast cancer diagnosis prediction tool with a user-friendly dashboard. You can customize and expand upon it to suit the specific requirements and resources available to you. We hope you find our app of good use because we know we have.

## Data References
- Breast Cancer Wisconsin (Diagnostic) Data Set: https://www.kaggle.com/datasets/uciml/breast-cancer-wisconsin-data

- UC Irvine "Breast Cancer Data": https://archive.ics.uci.edu/dataset/14/breast+cancer

- Data Hub "Breast Cancer": https://datahub.io/machine-learning/breast-cancer

```#Thank you for reading me!```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)











