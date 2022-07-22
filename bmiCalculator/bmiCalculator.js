const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/bmiCalculator.html');
    // res.sendFile(__dirname + "/" + "bmiCalculator.css");
});
// app.get('/style.css', function(req, res) {
    
//   });

app.post('/',(req,res)=>{
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);
  let bmi = Math.round((weight*height)/1000);
  res.send("Your BMI is " + bmi);
});

app.listen(3001,()=>{
    console.log("Server Started at Port 3001 ")
});