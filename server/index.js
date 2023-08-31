const express = require('express');
import {readFileSync} from 'fs'

const app = express();

app.use(express.static("dist"));

app.get("/", (req, res)=>{
    const index = readFileSync("./public/index.html", "utf-8");

    res.send(index);
});

app.listen(777, ()=>{
    console.log(`Server running ...`)
});