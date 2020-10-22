import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Signup from "./Signup";
import { useLocation } from "react-router-dom";

const SignupWrapper = ({ handleLogin }) => {
  const [actor, setActor] = useState(null);
  const path = useLocation().pathname;
  useEffect(() => {
    if (path === "/student-signup") {
      setActor("student");
    }
    if (path === "/teacher-signup") {
      setActor("teacher");
    }
  }, [path]);

  return (
    <>
      hello i am signup wapper
      <Signup actor={actor} handleLogin={handleLogin} />
    </>
  );
};

SignupWrapper.propTypes = {};

export default SignupWrapper;
