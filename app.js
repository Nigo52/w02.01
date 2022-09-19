const express = require('express');
const app = express();
const router = express.Router();
const fs = require("fs");
app.set('port', process.env.PORT || 80);
app.listen(port);
console.log("Web has been initialized" +" "+ port);

//--------------------Routing----------------------------------//
router.get('/',(request,response)=>
{
    data = fs.readFileSync("./html/main.html");
    pageContent = data.toString();
    response.send(pageContent);
});
router.get('/home',(request,response)=>
{
    data = fs.readFileSync("./html/home.html");
    pageContent = data.toString();
    response.send(pageContent);
});
router.get('/about',(request,response)=>
{
    data = fs.readFileSync("./html/about.html");
    pageContent = data.toString();
    response.send(pageContent);
});
router.get('/contact',(request,response)=>
{
    data = fs.readFileSync("./html/contact.html");
    pageContent = data.toString();
    response.send(pageContent);
});
//------------------------------------------------------------//
app.use('/', router);
app.use('/home', router);
app.use('/about', router);
app.use('/contact', router);

//--------------------Launch----------------------------------//
