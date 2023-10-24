import React, { useState } from "react";

const Question = ({ question,  activeId, toggleQuestion }) => {

    const isActive = question.id === activeId

  return (
    <article className="question">
      <header>
        <h5>{question.title} </h5>
      
      <button className="question-btn"
        onClick={() => {
          toggleQuestion(question.id);
        }}>
        {isActive ? "-" : "+"}{" "}
      </button>
      </header>
      {isActive && <p>{question.info}</p>}

    </article>
  );
};

export default Question;
