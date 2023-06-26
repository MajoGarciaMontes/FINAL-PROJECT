// Created a const to get the model scores for the gauge charts by using the appropriate API route:
const url = '/api/model-scores';

// Read the JSON in the URL and created a function to plot the charts:
d3.json(url).then(({breast_cancer_model_prediction_scores}) => {
  
  // Defined the variables for each of the charts:
  const accuracyData = breast_cancer_model_prediction_scores.accuracy;
  const precisionBenign = breast_cancer_model_prediction_scores.precision.benign;
  const precisionMalignant = breast_cancer_model_prediction_scores.precision.malignant;
  const recallBenign = breast_cancer_model_prediction_scores.recall.benign;
  const recallMalignant = breast_cancer_model_prediction_scores.recall.malignant;
  const f1scoreBenign = breast_cancer_model_prediction_scores.f1score.benign;
  const f1scoreMalignant = breast_cancer_model_prediction_scores.f1score.malignant;

  // Created a variable for the trace of the accuracy gauge chart:
  var accuracyGauge = {
    value: accuracyData,
    title: { text: "Accuracy" },
    type: "indicator",
    mode: "gauge+number",
    gauge: {
      axis: { range: [null, 100] },
      bar: {
        color: "gray",
        thickness: 0.2
      },
      steps: [
        { range: [0, 10], color: "rgb(255, 204, 217)" },
        { range: [11, 20], color: "rgb(255, 187, 204)" },
        { range: [21, 30], color: "rgb(255, 170, 191)" },
        { range: [31, 40], color: "rgb(255, 153, 179)" },
        { range: [41, 50], color: "rgb(255, 136, 166)" },
        { range: [51, 60], color: "rgb(255, 119, 153)" },
        { range: [61, 70], color: "rgb(255, 102, 140)" },
        { range: [71, 80], color: "rgb(255, 85, 128)" },
        { range: [81, 90], color: "rgb(255, 68, 115)" },
        { range: [91, 100], color: "rgb(255, 51, 102)" }
      ],
      shape: "gauge",
      threshold: {
        line: { color: "black", width: 6 },
        thickness: 0.5,
        value: accuracyData
      }
    }
  };
  // Plotted the accuracy gauge chart:
  Plotly.newPlot("accuracy-gauge", [accuracyGauge]);

  // Created a variable for the trace of the precision gauge charts for benign tumors:
  const PrecisionBenignGauge = {
  title: { text: "Precision for Benign Tumors" },
  value: precisionBenign,
  type: "indicator",
  mode: "gauge+number",
  gauge: {
    axis: { range: [null, 100] },
    bar:  {
      color: "gray",
      thickness: 0.2
    },
    steps: [
      { range: [0, 10], color: "rgb(255, 204, 217)" },
      { range: [11, 20], color: "rgb(255, 187, 204)" },
      { range: [21, 30], color: "rgb(255, 170, 191)" },
      { range: [31, 40], color: "rgb(255, 153, 179)" },
      { range: [41, 50], color: "rgb(255, 136, 166)" },
      { range: [51, 60], color: "rgb(255, 119, 153)" },
      { range: [61, 70], color: "rgb(255, 102, 140)" },
      { range: [71, 80], color: "rgb(255, 85, 128)" },
      { range: [81, 90], color: "rgb(255, 68, 115)" },
      { range: [91, 100], color: "rgb(255, 51, 102)" }
    ],
    shape: "gauge",
    threshold: {
      line: { color: "black", width: 6 },
      thickness: 0.5,
      value: precisionBenign
    },
    value: precisionBenign
  }
  };

  // Created a variable for the trace of the precision gauge charts for malignant tumors:
  const PrecisionMalignantGauge = {
  title: { text: "Precision for Malignant Tumors" },
  value: precisionMalignant,
  type: "indicator",
  mode: "gauge+number",
  gauge: {
    axis: { range: [null, 100] },
    bar: {
      color: "gray",
      thickness: 0.2
    },
    steps: [
      { range: [0, 10], color: "rgb(255, 204, 217)" },
      { range: [11, 20], color: "rgb(255, 187, 204)" },
      { range: [21, 30], color: "rgb(255, 170, 191)" },
      { range: [31, 40], color: "rgb(255, 153, 179)" },
      { range: [41, 50], color: "rgb(255, 136, 166)" },
      { range: [51, 60], color: "rgb(255, 119, 153)" },
      { range: [61, 70], color: "rgb(255, 102, 140)" },
      { range: [71, 80], color: "rgb(255, 85, 128)" },
      { range: [81, 90], color: "rgb(255, 68, 115)" },
      { range: [91, 100], color: "rgb(255, 51, 102)" }
    ],
    shape: "gauge",
    threshold: {
      line: { color: "black", width: 6 },
      thickness: 0.5,
      value: precisionMalignant
    },
    value: precisionMalignant
  }
  };

  // Plotted both of the precision charts:
  Plotly.newPlot("precision-benign-gauge", [PrecisionBenignGauge]);
  Plotly.newPlot("precision-malignant-gauge", [PrecisionMalignantGauge]);

  // Created a variable for the trace of the recall gauge charts for benign tumors:
  const recallBenignGauge = {
  title: { text: "Recall for Benign Tumors" },
  value: recallBenign,
  type: "indicator",
  mode: "gauge+number",
  gauge: {
    axis: { range: [null, 100] },
    bar: {
      color: "gray",
      thickness: 0.2
    },
    steps: [
      { range: [0, 10], color: "rgb(255, 204, 217)" },
      { range: [11, 20], color: "rgb(255, 187, 204)" },
      { range: [21, 30], color: "rgb(255, 170, 191)" },
      { range: [31, 40], color: "rgb(255, 153, 179)" },
      { range: [41, 50], color: "rgb(255, 136, 166)" },
      { range: [51, 60], color: "rgb(255, 119, 153)" },
      { range: [61, 70], color: "rgb(255, 102, 140)" },
      { range: [71, 80], color: "rgb(255, 85, 128)" },
      { range: [81, 90], color: "rgb(255, 68, 115)" },
      { range: [91, 100], color: "rgb(255, 51, 102)" }
    ],
    shape: "gauge",
    threshold: {
      line: { color: "black", width: 6 },
      thickness: 0.5,
      value: recallBenign
    },
  }
  };

  // Created a variable for the trace of the recall gauge charts for malignant tumors:
  const recallMalignantGauge = {
  title: { text: "Recall for Malignant Tumors" },
  value: recallMalignant,
  type: "indicator",
  mode: "gauge+number",
  gauge: {
    axis: { range: [null, 100] },
    bar: {
      color: "gray",
      thickness: 0.2
    },
    steps: [
      { range: [0, 10], color: "rgb(255, 204, 217)" },
      { range: [11, 20], color: "rgb(255, 187, 204)" },
      { range: [21, 30], color: "rgb(255, 170, 191)" },
      { range: [31, 40], color: "rgb(255, 153, 179)" },
      { range: [41, 50], color: "rgb(255, 136, 166)" },
      { range: [51, 60], color: "rgb(255, 119, 153)" },
      { range: [61, 70], color: "rgb(255, 102, 140)" },
      { range: [71, 80], color: "rgb(255, 85, 128)" },
      { range: [81, 90], color: "rgb(255, 68, 115)" },
      { range: [91, 100], color: "rgb(255, 51, 102)" }
    ],
    shape: "gauge",
    threshold: {
      line: { color: "black", width: 6 },
      thickness: 0.5,
      value: recallMalignant
    },
  }
  };

  // Plotted both of the recall charts:
  Plotly.newPlot("recall-benign-gauge", [recallBenignGauge]);
  Plotly.newPlot("recall-malignant-gauge", [recallMalignantGauge]);

  // Created a variable for the trace of the f1-score gauge charts for benign tumors:
  const f1scoreBenignGauge = {
  title: { text: "F1-score for Benign Tumors" },
  value: f1scoreBenign,
  type: "indicator",
  mode: "gauge+number",
  gauge: {
    axis: { range: [null, 100] },
    bar: {
      color: "gray",
      thickness: 0.2
    },
    steps: [
      { range: [0, 10], color: "rgb(255, 204, 217)" },
      { range: [11, 20], color: "rgb(255, 187, 204)" },
      { range: [21, 30], color: "rgb(255, 170, 191)" },
      { range: [31, 40], color: "rgb(255, 153, 179)" },
      { range: [41, 50], color: "rgb(255, 136, 166)" },
      { range: [51, 60], color: "rgb(255, 119, 153)" },
      { range: [61, 70], color: "rgb(255, 102, 140)" },
      { range: [71, 80], color: "rgb(255, 85, 128)" },
      { range: [81, 90], color: "rgb(255, 68, 115)" },
      { range: [91, 100], color: "rgb(255, 51, 102)" }
    ],
    shape: "gauge",
    threshold: {
      line: { color: "black", width: 6 },
      thickness: 0.5,
      value: f1scoreBenign
    },
  }
  };

  // Created a variable for the trace of the f1-score gauge charts for malignant tumors:
  const f1scoreMalignantGauge = {
  title: { text: "F1-score for Malignant Tumors" },
  value: f1scoreMalignant,
  type: "indicator",
  mode: "gauge+number",
  gauge: {
    axis: { range: [null, 100] },
    bar: {
      color: "gray",
      thickness: 0.2
    },
    steps: [
      { range: [0, 10], color: "rgb(255, 204, 217)" },
      { range: [11, 20], color: "rgb(255, 187, 204)" },
      { range: [21, 30], color: "rgb(255, 170, 191)" },
      { range: [31, 40], color: "rgb(255, 153, 179)" },
      { range: [41, 50], color: "rgb(255, 136, 166)" },
      { range: [51, 60], color: "rgb(255, 119, 153)" },
      { range: [61, 70], color: "rgb(255, 102, 140)" },
      { range: [71, 80], color: "rgb(255, 85, 128)" },
      { range: [81, 90], color: "rgb(255, 68, 115)" },
      { range: [91, 100], color: "rgb(255, 51, 102)" }
    ],
    shape: "gauge",
    threshold: {
      line: { color: "black", width: 6 },
      thickness: 0.5,
      value: f1scoreMalignant
    },
  }
  };

  // Plotted both of the f1-score charts:
  Plotly.newPlot("f1-score-benign-gauge", [f1scoreBenignGauge]);
  Plotly.newPlot("f1-score-malignant-gauge", [f1scoreMalignantGauge]);
});