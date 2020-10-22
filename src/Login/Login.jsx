import React from "react";
import { withFormik, Field, Form } from "formik";
import * as yup from "yup";

import { withRouter } from "react-router-dom";
import { courses } from "../util/dummyData";

const Login = ({ actor, errors, touched, isSubmitting, history }) => {
  return (
    <Form>
      {actor} Login
      <div>
        <label htmlFor="email">
          <h3>Email</h3>
        </label>

        <Field
          data-testid="email"
          type="email"
          name="email"
          placeholder="jitu@example.com"
        />
        {touched.email && errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">
          <h3>Password</h3>
        </label>

        <Field type="text" name="password" placeholder="password" />
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit">Login</button>
      <button onClick={() => history.push(`${actor}-signup`)}>Sign up</button>
    </Form>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "jitu@smething.com",
      password: password || "12452145",
    };
  },

  handleSubmit(values, { props }) {
    props.handleLogin({ id: 125, actor: props.actor, courses: [...courses] });
    props.history.push(props.actor);
  },
  validationSchema: yup.object({
    email: yup.string().email("Invalid Email").required("required"),
    password: yup.string().min(8).required("required"),
  }),
})(Login);

export default withRouter(FormikLogin);
