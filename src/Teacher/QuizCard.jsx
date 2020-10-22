import React from "react";
import PropTypes from "prop-types";

const QuizCard = ({ que, ans }) => {
  const rednerAns = ans.map((a, i) => {
    return (
      <div key={i}>
        {i + 1}
        {a.ansText}
        {a.correct ? "correct" : "incorrect"}
        {a.points}
      </div>
    );
  });
  return (
    <>
      <div>
        {que}
        <button>add</button>
        <button>delete</button>
      </div>
      {rednerAns}
    </>
  );
};

QuizCard.propTypes = {};

export default QuizCard;
