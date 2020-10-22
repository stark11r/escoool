import React from "react";
import { useHistory } from "react-router-dom";

const CourseCard = ({
  setShowCreateEditModal,
  id,
  name,
  img,
  desc,
  passMarks,
}) => {
  const history = useHistory();
  return (
    <>
      <div>{name}</div>
      <div>{img}</div>
      <div>{desc}</div>
      <div>{passMarks}</div>
      <button
        onClick={() => {
          setShowCreateEditModal({ id, name, img, desc, passMarks });
        }}
      >
        edit
      </button>
      <button>delete</button>
      <button onClick={() => history.push(`quiz?Id=${id}`)}>Quiz</button>
    </>
  );
};

// CourseCard.propTypes = {
//   name: PropTypes.string(),
//   img: PropTypes.string(),
//   desc: PropTypes.string(),
//   passMarks: PropTypes.number(),
// };

export default CourseCard;
