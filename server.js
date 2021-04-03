'use strict';
// bulding express server :



// 1) require express framework
// make a variable called express to use express library
const express = require('express');

//----------------------------


// 2) install express framework
// terminal: npm install express
// we get the library in --> node_modules folder
// Has express methods and properties (modules)

//----------------------------

// NOTE:
//.gitignore --> prevents pushing node_modules folder to heroko server
// beacause it already has it 

//----------------------------


// initialize using express 
// server variable has all methods and properties in it
const server = express();


//----------------------------

// PORT capital // any number // avoid 5432 reserved

// const PORT = 3030; //--> we set port -->when only using localhost
// if working on heroku :
const PORT = process.env.PORT || 3030 ;

//means: on localhost use : 3030
// on heroku host server use: auto generated PORT
// its defined in file called: env


//-------------------------------
// for today's lab only:


// let server acceess static files in public folder (static html,css files)
server.use(express.static('./public'));
// now --> when we send  https://localhost:3030/index.html
// website will run

//----------------------------------

//http request :
// https://medium.com/home
// https://localhost:3030/test

//-------------
//rout : ---> /test , /data

// Rout definition
// callback function --> called whenever server recieves /test rout 

server.get('/test', (request,response) => {
//response : the response server sends when reciving rout : file / html markup / string / obj ...)
response.send('your server is alive!'); 
// send 'your server is alive!' --> to browser who sent http request

});

server.get('/data', (req,res) => {

  let family = [ {name:'furat'}, {name:'hana'} ]
  res.send(family); // pushed as json ==> {'name','furat'}  
  //res.json(family); // also pushed as json
  });


  // will run if user sent : https://localhost:3030
  server.get('/', (request,response) => {
    response.send('no rout'); 
    
    });

//-------------------------------

// make server ready to listin for new requests
// listnening on port 3030 
server.listen (PORT, () => {

// if server is listneing --> 'ok' will show on terminal
console.log('ok');

});

//----------------------------
// [before]: js code runs on browser // live-server 
// console log appear on browser

// [now]: js code runs on terminal 
// console log appear on terminal
// waiting browser to send : https request 

//-----------------------------

// to run server:
// terminal: npm start 
//OR node server.js 
//-------------------

// if you have changes in server.js you want to see on terminal
// stop server (ctr+C) --> then run it 




//-------------


