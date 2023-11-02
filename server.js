const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = 4500;

app.use(morgan('combined'))


app.get('/',(req,res) =>{
    res.send('hello World_001');
});

app.listen(port, ()=>{
    console.log('server is runing on port :',port);
});