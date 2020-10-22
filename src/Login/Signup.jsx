import React from "react";
import { Link, withRouter } from "react-router-dom";
import { withFormik, Form, Field } from "formik";

import * as yup from "yup";

const Signup = ({ actor, touched, errors, history, handleSubmit }) => {
  return (
    <Form style={{ margin: 20, padding: 20 }}>
      {actor} Signup
      <div>
        <label htmlFor="firstname">
          <h3>First Name</h3>
        </label>
        <Field name="firstname" type="text" placeholder="jitu" />
        {touched.firstname && errors.firstname && <p>{errors.firstname}</p>}
      </div>
      <div>
        <label htmlFor="lastname">
          <h3>Last Name</h3>
        </label>
        <Field name="lastname" type="text" placeholder="jitender" />
        {touched.lastname && errors.lastname && <p>{errors.lastname}</p>}
      </div>
      <div>
        <label htmlFor="email">
          <h3>Email</h3>
        </label>
        <Field name="email" type="email" placeholder="jitu@example.com" />
        {touched.email && errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">
          <h3>Password</h3>
        </label>

        <Field type="text" name="password" placeholder="password" />
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <label htmlFor="confirmpassword">
          <h3>Confrim Password</h3>
        </label>
        <Field
          name="confirmpassword"
          type="text"
          placeholder="confrim password"
        />
        {touched.confirmpassword && errors.confirmpassword && (
          <p>{errors.confirmpassword}</p>
        )}
      </div>
      <button type="submit" style={{ margin: 10 }}>
        signup
      </button>
      <button onClick={() => history.push(`${actor}-login`)}>Login</button>
    </Form>
  );
};
const FormikSignup = withFormik({
  mapPropsToValues({ email, password, firstname, lastname }) {
    return {
      firstname: firstname || "abc",
      lastname: lastname || "abc",
      email: email || "abc@ab.c",
      password: password || "12345678",
      confirmpassword: "12345678",
    };
  },
  handleSubmit(values, { props }) {
    props.handleLogin({ id: 125, actor: props.actor });
    props.history.push(props.actor);
  },
  validationSchema: yup.object({
    firstname: yup.string().required(),
    lastname: yup.string(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required().label("password"),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  }),
})(Signup);
export default withRouter(FormikSignup);
