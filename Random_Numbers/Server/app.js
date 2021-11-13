const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const route = require('./Routes/index');
const bodyParser = require('body-parser');

const app = express();

const port = 4848;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/api', route);



mongoose.connect(
    'mongodb+srv://Madhusudan:15717@cluster0.ssc3h.mongodb.net/Random-Number?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(success => {
    console.log("Connected to MongoDB");

    app.listen(port, () => {
        console.log(`Server is running on ${port}`);
    });

}).catch(error => {
    console.log("Cannot connect to MongoDB: " + error);
});