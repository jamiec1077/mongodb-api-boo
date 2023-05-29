
const express = require('express');


const db = require('./config/connection');
const { urlencoded } = require('body-parser');

s
const PORT = process.env.PORT|| 3001;


const app = (express());


app.use(express.urlencoded({extended: true}));

app.use(express.json);