import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Login from "./Login";

const LoginWrapper = ({ handleLogin }) => {
  const [actor, setActor] = useState(null);
  const path = useLocation().pathname;
  useEffect(() => {
    if (path === "/student-login") {
      setActor("student");
    }
    if (path === "/teacher-login") {
      setActor("teacher");
    }
  }, [path]);
  return (
    <>
      hello i am login wapper
      <Login actor={actor} handleLogin={handleLogin} />
    </>
  );
};

LoginWrapper.propTypes = {};

export default LoginWrapper;
