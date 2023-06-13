const express = require('express');
const app = express();

let count = 0;

app.get('*', (req, res) => 
{
    count++;
    res.status(200).json('Hello World! ' + count)
});

app.listen(3000);