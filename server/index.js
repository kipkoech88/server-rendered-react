const express = require('express');

const app = express();

app.get("/", (req, res)=>{
    res.send("<h1>React is awesome!</h1>");
});

app.listen(777, ()=>{
    console.log(`Server running ...`)
});