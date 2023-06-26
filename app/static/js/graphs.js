const url = '/api/model-scores';

d3.json(url).then(({breast_cancer_model_prediction_scores}) => {
    
  const accuracyData = breast_cancer_model_prediction_scores.accuracy;
  const precisionBenign = breast_cancer_model_prediction_scores.precision.benign;
  const precisionMalignant = breast_cancer_model_prediction_scores.precision.malignant;
  const recallBenign = breast_cancer_model_prediction_scores.recall.benign;
  const recallMalignant = breast_cancer_model_prediction_scores.recall.malignant;
  const f1scoreBenign = breast_cancer_model_prediction_scores.f1score.benign;
  const f1scoreMalignant = breast_cancer_model_prediction_scores.f1score.malignant;

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
  Plotly.newPlot("accuracy-gauge", [accuracyGauge]);


// Create the precision gauge plot for precisionBenign
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

// Create the precision gauge plot for precisionMalignant
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

// Render the gauge plots side by side
Plotly.newPlot("precision-benign-gauge", [PrecisionBenignGauge]);
Plotly.newPlot("precision-malignant-gauge", [PrecisionMalignantGauge]);


// Create the recall gauge plot for recallBenign
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

// Create the recall gauge plot for recallMalignant
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

// Render the recall gauge plots side by side
Plotly.newPlot("recall-benign-gauge", [recallBenignGauge]);
Plotly.newPlot("recall-malignant-gauge", [recallMalignantGauge]);

// Create the f1-score gauge plot for f1-scoreBenign
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

// Create the f1score gauge plot for f1scoreMalignant
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

// Render the f1score gauge plots side by side
Plotly.newPlot("f1-score-benign-gauge", [f1scoreBenignGauge]);
Plotly.newPlot("f1-score-malignant-gauge", [f1scoreMalignantGauge]);
});
