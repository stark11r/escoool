import React from "react";
import PropTypes from "prop-types";
import { courses } from "../util/dummyData";
import CourseCard from "./CourseCard";
const CourseCardList = ({ setShowCreateEditModal }) => {
  const renderCourseList = courses.map((course, i) => {
    return (
      <CourseCard
        key={i}
        {...course}
        setShowCreateEditModal={setShowCreateEditModal}
      />
    );
  });
  return <>{renderCourseList}</>;
};

CourseCardList.propTypes = {};

export default CourseCardList;
