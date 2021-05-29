const http = require('http')
const express = require('express')
 
const port = 3001 

const app = express();
const server = http.createServer(app)

server.listen(port, ()=>{
    console.log("hello its working");
})


app.get('/', (req,res) =>{
    res.send('hello');
})