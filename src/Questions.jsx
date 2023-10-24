import React from "react";
import Question from "./Question";

const Questions = ({ questionsArray, activeId, toggleQuestion }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questionsArray.map((question) => (
        <Question
          key={question.id}
          question={question}
          activeId={activeId}
          toggleQuestion={toggleQuestion}
        />
      ))}
    </section>
  );
};

export default Questions;
