const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
// app.get('/',(req,res)=>{
//     res.send('Hello this will be a calculator')
// })
//instead of using the above code now what i want to do is to send a whole file index.html
app.get('/',(req, res)=>{
    //res.sendFile('index.html');
    // instead of using the relative path use thuis which will give the directory of the the file
    //console.log(__dirname);
    res.sendFile(__dirname +'/index.html')
})

//Accepting posts requests
app.post('/',(req,res)=>{
    // console.log(req.body)-> tap into the data of html form
    var num1 =  Number(req.body.num1);
    // req.body.num1 these are parsed as text so make the number by usinng Number()
    var num2 =  Number(req.body.num2);
    var result = num1*num2;
    res.send("The result of the calculation is " + result)
})

app.listen(3000, ()=>{
    console.log('Server started on port 3000');
})