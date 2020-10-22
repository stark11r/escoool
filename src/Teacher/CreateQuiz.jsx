import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFormik, Form, Field, ErrorMessage, FieldArray } from "formik";

import * as yup from "yup";

const CreateQuiz = ({
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
      {values.name === "my course" ? "Create Quiz" : "edit quick "}
      <div>
        <label htmlFor="name">
          <h3>Course Name</h3>
        </label>
        <Field name="name" type="text" placeholder="my course" />
        {touched.name && errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="passMarks">
          <h3>Course passMarks</h3>
        </label>
        <Field passMarks="passMarks" type="number" placeholder="25" />
        {touched.passMarks && errors.passMarks && <p>{errors.passMarks}</p>}
      </div>

      {/* array of questions */}
      <FieldArray name="ques">
        {({ remove, push }) => (
          <div>
            {values.ques.length > 0 &&
              values.ques.map((que, index) => (
                <div className="row" key={index}>
                  <div className="col">
                    <label htmlFor={`ques.${index}.queText`}>Queston</label>
                    <Field
                      name={`ques.${index}.queText`}
                      placeholder="question"
                      type="text"
                    />
                    <ErrorMessage
                      name={`ques.${index}.queText`}
                      component="div"
                      className="field-error"
                    />
                  </div>

                  <div className="col">
                    <label htmlFor={`ques.${index}.points`}>Points</label>
                    <Field
                      name={`ques.${index}.points`}
                      placeholder="question"
                      type="text"
                    />
                    <ErrorMessage
                      name={`ques.${index}.points`}
                      component="div"
                      className="field-error"
                    />
                  </div>
                  <button
                    type="button"
                    className="secondary"
                    onClick={() => remove(index)}
                  >
                    X
                  </button>
                  {/* //////////////////////////////////////////////////////////// */}
                  <FieldArray name={`ques.${index}.ans`}>
                    {({ remove, push }) => {
                      return (
                        <div>
                          {values.ques[index].ans.length > 0 &&
                            values.ques[index].ans.map((q, i) => (
                              <div className="row" key={i}>
                                <div className="col">
                                  <label
                                    htmlFor={`ques.${index}.ans.${i}.ansText`}
                                  >
                                    {i + 1}
                                  </label>
                                  <Field
                                    name={`ques.${index}.ans.${i}.ansText`}
                                    placeholder="answer"
                                    type="text"
                                  />
                                  <ErrorMessage
                                    name={`ques.${index}.ans.${i}.ansText`}
                                    component="div"
                                    className="field-error"
                                  />
                                  <button
                                    type="button"
                                    className="secondary"
                                    onClick={() => remove(i)}
                                  >
                                    X
                                  </button>
                                </div>
                              </div>
                            ))}
                          <button
                            type="button"
                            className="secondary"
                            onClick={() => {
                              push({
                                ansText: "",
                                correct: false,
                              });
                            }}
                          >
                            Add answer
                          </button>
                        </div>
                      );
                    }}
                  </FieldArray>

                  {/* ////////////////////////////////// */}
                </div>
              ))}
            <button
              type="button"
              className="secondary"
              onClick={() =>
                push({
                  queText: "",
                  points: 0,
                  ans: [
                    {
                      ansText: "",
                      correct: false,
                    },
                  ],
                })
              }
            >
              Add Question
            </button>
          </div>
        )}
      </FieldArray>
      <button type="submit">Invite</button>

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
const FormikCreateQuiz = withFormik({
  mapPropsToValues({ name, ques, passMarks }) {
    return {
      name: name || "my course",
      passMarks: passMarks || 45,
      ques: ques || [
        {
          queText: "who are you",
          points: 7,
          ans: [
            {
              ansText: "you are groot",
              correct: true,
            },
          ],
        },
      ],
    };
  },
  handleSubmit(values) {
    console.log(values);
  },
  validationSchema: yup.object({}),
})(CreateQuiz);
export default withRouter(FormikCreateQuiz);
