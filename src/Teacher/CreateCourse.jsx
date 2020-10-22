import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFormik, Form, Field } from "formik";

import * as yup from "yup";

const CreateCourse = ({
  values,
  touched,
  errors,
  setFieldValue,
  setShowCreateEditModal,
}) => {
  return (
    <Form
      style={{
        position: "absolute",
        backgroundColor: "bisque",
        top: "20%",
        left: "25%",
        zIndex: 20,
        height: 500,
        width: 1000,
        color: "white",
        padding: "8%",
      }}
    >
      {values.name === "my course" ? "CreateCourse" : "edit course"}
      <div>
        <label htmlFor="name">
          <h3>Course Name</h3>
        </label>
        <Field name="name" type="text" placeholder="my course" />
        {touched.name && errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="img">
          <h3>img</h3>
        </label>
        <input
          id="img"
          name="img"
          type="file"
          onChange={(event) => {
            setFieldValue("ig", event.currentTarget.files[0]);
          }}
        />
        {touched.img && errors.img && <p>{errors.img}</p>}
      </div>
      <div>
        <label htmlFor="desc">
          <h3>Course Name</h3>
        </label>
        <Field name="desc" type="text" placeholder="cool course" />
        {touched.desc && errors.desc && <p>{errors.desc}</p>}
      </div>
      <div>
        <label htmlFor="passMarks">
          <h3>Course Name</h3>
        </label>
        <Field name="passMarks" type="number" placeholder="cool course" />
        {touched.passMarks && errors.passMarks && <p>{errors.passMarks}</p>}
      </div>
      <button
        className="btn btn-warning"
        onClick={() => {
          setShowCreateEditModal(false);
        }}
        style={{ float: "right", margin: 10 }}
      >
        close
      </button>
      <button
        type="submit"
        className="btn btn-success"
        onClick={() => {
          setShowCreateEditModal(false);
        }}
        style={{ float: "right", margin: 10 }}
      >
        save
      </button>
    </Form>
  );
};
const FormikCreateCourse = withFormik({
  mapPropsToValues({ name, img, desc, passMarks }) {
    return {
      name: name || "my course",
      img: img || "blank",
      desc: desc || "desc",
      passMarks: passMarks || 45,
    };
  },
  handleSubmit(values, { props }) {
    // props.handleCreateEditCourse(values);
    console.log(props);
  },
  validationSchema: yup.object({
    name: yup.string().required(),
    img: yup.string(),
    desc: yup.string(),
    passMarks: yup.number().required(),
  }),
})(CreateCourse);
export default withRouter(FormikCreateCourse);
