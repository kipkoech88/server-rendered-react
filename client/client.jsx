import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

let state = undefined;

fetch("https://localhost:777/data")
    .then(res => res.json())
    .then(data => {
        state = data;
        console.log("state loaded", state);
        render();
    })
// ReactDOM.render(<App/>, 
// document.querySelector("#Container"))

function render() {
    ReactDOM.hydrate(<App/>, document.querySelector("#Container"))
}

// render();