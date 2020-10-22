import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>some text about the website</div>
      <div>
        <div>
          login as teacher
          <Link to="teacher-login">Login as teacher</Link>
        </div>
        <div>
          login as student
          <Link to="student-login">Login as student</Link>
        </div>
      </div>
    </>
  );
};

HomePage.propTypes = {};

export default HomePage;
