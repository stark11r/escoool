import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import * as qs from "qs";
import userContext from "../Login/LoginContext";
import CreateQuiz from "./CreateQuiz";
const Quizs = () => {
  const courseId = qs.parse(useLocation().search)["?Id"];
  const course = useContext(userContext).courses.filter(
    (c) => (c.id = courseId)
  );
  const { name, passMark, ques } = course[0];
  return (
    <>
      <CreateQuiz name={name} passMark={passMark} ques={ques} />
    </>
  );
};

export default Quizs;
