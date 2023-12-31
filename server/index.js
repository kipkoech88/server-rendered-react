import express from 'express';
import React from 'react';

import {readFileSync} from 'fs'

import {renderToString} from 'react-dom/server';

import { App } from '../client/App'; 
import { handleModifyAnwerVotes } from '../shared/utility';

const data = {
    questions:[
        {
            questionId:"Q1",
            content:"should we use JQuery, fetch or Ajax"
        },
        {
            questionId: "Q2",
            content:"What is the best thing about React"
        }
    ],
    answers:[{
        answerId: "A1",
        questionId: "Q1",
        upvotes: 2,
        content: "JQuery"
    },
    {
        answerId: "A2",
        questionId: "Q2",
        upvotes: 1,
        content: "Fetch"
    } 
]
}

const app = express();

app.use(express.static("dist"));

app.get("/data", async(req, res)=>{
    res.json(data)
})

app.get("/vote/:answerId", (req, res)=>{
    const {params, query} = req;
    data.answers = handleModifyAnwerVotes(data.answers, params.answerId, query.increment);

    res.send("Ok")
})

app.get("/", (req, res)=>{
    const index = readFileSync("./public/index.html", "utf-8");

    const rendered = renderToString(<App {... data} />);

    res.send(index.replace("{{rendered}}", rendered));
});

app.listen(777, ()=>{
    console.log(`Server running ...`)
});