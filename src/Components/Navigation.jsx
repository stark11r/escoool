import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import userContext from "../Login/LoginContext";
const Navigation = () => {
  const user = useContext(userContext);
  return (
    <>
      hi i am nav
      <ul>
        <li>logo</li>
        <Link to="/">e-school</Link>
        {user ? <li>{user.id}</li> : <li>login</li>}
        <li>about</li>
      </ul>
    </>
  );
};

Navigation.propTypes = {};

export default Navigation;
