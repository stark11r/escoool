import React from "react";
import PropTypes from "prop-types";
import QuizCard from "./QuizCard";

const QuizList = ({ ques }) => {
  const renderQue = ques.map((q, i) => {
    return <QuizCard key={i} que={q.queText} ans={q.ans} />;
  });

  return <>{renderQue}</>;
};

QuizList.propTypes = {};

export default QuizList;
