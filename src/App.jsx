import { useState } from "react";
import questions from "./data";
import Questions from "./Questions";

const App = () => {
  const [questionsArray, setQuestionArray] = useState(questions);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    if (id === activeId){
      setActiveId(null)
    }
    else {
      setActiveId(id)
    }
  }
  

  return (
    <main>
      <Questions
        questionsArray={questionsArray}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
};

export default App;
