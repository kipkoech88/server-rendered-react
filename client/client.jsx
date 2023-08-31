import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { handleModifyAnwerVotes } from '../shared/utility';

let state = undefined;

fetch("https://localhost:777/data")
    .then(res => res.json())
    .then(data => {
        state = data;
        console.log("state loaded", state);
        render();
    })
// ReactDOM.render(<App/>, 
// document.querySelector("#Container"))s

function handleVote(answerId, increment){
    state.answer = handleModifyAnwerVotes(state.answerId, answerId, increment);

    render();
}

function render() {
    ReactDOM.hydrate(<App {... state} handleModifyAnwerVotes={handleModifyAnwerVotes} />, document.querySelector("#Container"))
}

// render();