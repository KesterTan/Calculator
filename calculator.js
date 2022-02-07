const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser);

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
    res.send("<h1>BMI Calculator</h1>");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, rest) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2;
    res.send(`The result is ${result}.`);
});

app.post("/bmicalculator", function(req, res) {
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);

    let bmi = weight / (height * height);
    res.send(`Your BMI is ${bmi}`);
});

app.listen(3000, function(req, res) {
    console.log("Server launched.");
});
