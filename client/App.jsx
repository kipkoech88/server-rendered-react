import React from "react";


export const App = ({questions, answers})=>{
    return (
        <div>
            <h1>Q&A Tool</h1>

            {questions.map(({questionId, content, handleModifyAnwerVotes})=>(
                <div key={questionId}>
                    <h3>{content}</h3>
                    <div>
                    {answers.filter(answer => answer.questionId === questionId).map(({answerId, content, upvotes})=>(
                        <div key={answerId}>
                                <span>
                                    {content} - {upvotes}
                                </span>
                                <button onClick={()=>handleModifyAnwerVotes(answerId, 1)}>+</button>
                                <button onClick={()=>handleModifyAnwerVotes(answerId, -1)}>-</button>
                        </div>
                    ))}
                    </div>
                </div>
            ))}
        </div>
    )
    
}