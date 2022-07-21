const express = require('express');
const app = express();
app.get('/',(request, response)=>{  // this is method by express to handle get request from browser and / represents root file/homepage
    // (request,response) cxan be changed to (req,res)
    // console.log(request);
    // response.send('Hello');
    response.send('<h1>Can you seet it ??</h1><p style="color:red;">Oka i can see it<p>');
}); 

// Targeting different route than the home/root
app.get('/contact', (req, res)=>{
    res.send('Contact me at: ravi.me@gmail.com')
})

app.get('/about',(req,res)=>{
    res.send('<ul><li>My name is Ravi Sharma</li><li>I am trying to learn Express</li></ul>')
});

app.get('/hobbies',(req,res)=>{
    res.send('<p>Tea</p><p>Code</p><p>Anime</p><p>Astrology</p>');
})
app.listen(3000,()=>{
    console.log('server started on port 3000');
});