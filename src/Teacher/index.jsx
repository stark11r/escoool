import React, { useEffect, useState } from "react";
import CourseCardList from "./CourseCardList";
import CreateCourse from "./CreateCourse";

const Teacher = ({ handleCreateEditCourse }) => {
  const [showCreateEditModal, setShowCreateEditModal] = useState(false);
  return (
    <>
      {showCreateEditModal && (
        <CreateCourse
          {...showCreateEditModal}
          setShowCreateEditModal={setShowCreateEditModal}
          handleCreateEditCourse={handleCreateEditCourse}
        />
      )}
      <div>some description</div>
      <CourseCardList setShowCreateEditModal={setShowCreateEditModal} />
      <button onClick={() => setShowCreateEditModal("create")}>
        <div style={{ fontSize: 18 }}>+</div>
      </button>
    </>
  );
};

export default Teacher;
