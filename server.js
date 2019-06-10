var express = require('express');
var multer = require('multer');
var path = require('path');
var app = express();
var port = 3000;
const util = require('util'); 
const fs = require('fs'); 
const TrainingApiClient = require("azure-cognitiveservices-customvision-training"); 
const PredictionApiClient = require("azure-cognitiveservices-customvision-prediction"); 
const setTimeoutPromise = util.promisify(setTimeout); 
//const trainingKey = "4c7eb965e7cc4e6aa9e2b741b36e8974"; 
const predictionKey = "6cd2b7b137f4419880844fd916cef75f"; 
//const predictionResourceId = "<your prediction resource id>"; 
const sampleDataRoot = "C:/Users/v.a.palanichamy/Documents/Seed Guard/Image Preprocessed/Processed Original Images/Original Seed - Processed Images/Almond_O_01.jpg"; 
const endPoint = "https://centralindia.api.cognitive.microsoft.com";
const publishIterationName = "SeedGuard1"; 
 const predictor = new PredictionApiClient(predictionKey, endPoint); 

var filename = ""; 
// specify the folder
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'dist/seeder')));
// headers and content type
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var storage = multer.diskStorage({
  // destination
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
	filename = file.originalname;
	console.log(filename);
  }
});
var upload = multer({ storage: storage });
app.get("/",function(req,res){
	res.send("index.html");
});
app.post("/predict", upload.array("uploads[]", 12), function (req, res) {
  
  //res.send(__dirname+"\\uploads\\"+filename);
 const testFile = fs.readFileSync(__dirname+"\\uploads\\"+filename); 
let resultdata = async () => { 
 const results = await predictor.classifyImage('eb74cf04-eb8e-4eca-824a-368e4683d2f0', publishIterationName, testFile);
return results.predictions;     //console.log(`\t ${predictedResult.tagName}: ${(predictedResult.probability * 100.0).toFixed(2)}%`);
 

}
resultdata().then((data)=>{
res.send(data)});
});

var server = app.listen(port, function () {
  console.log("Listening on port %s...", port);
});