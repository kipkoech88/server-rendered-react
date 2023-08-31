import express from 'express';
import React from 'react';

import {readFileSync} from 'fs'

import {renderToString} from 'react-dom/server';

import { App } from '../client/App'; 

const app = express();

app.use(express.static("dist"));

app.get("/", (req, res)=>{
    const index = readFileSync("./public/index.html", "utf-8");

    const rendered = renderToString(<App/>);

    res.send(index.replace("{{rendered}}", rendered));
});

app.listen(777, ()=>{
    console.log(`Server running ...`)
});