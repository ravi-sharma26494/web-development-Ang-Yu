const express = require('express');
const app = express();
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
    res.send("Tank ypu for posting")
})

app.listen(3000, ()=>{
    console.log('Server started on port 3000');
})