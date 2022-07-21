const express = require('express');
const app = express();
app.get('/',(request, response)=>{  // this is method by express to handle get request from browser and / represents root file/homepage
    // (request,response) cxan be changed to (req,res)
    // console.log(request);
    // response.send('Hello');
    response.send('<h1>Can you seet it ??</h1><p style="color:red;">Oka i can see it<p>');
}); 
app.listen(3000,()=>{
    console.log('server started on port 3000');
});