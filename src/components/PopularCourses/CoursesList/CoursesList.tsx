import React from "react";

import { CoursesListProps as Props } from "./CoursesList.types";
import CourseCard from "./CourseCard/CourseCard";

const CoursesList: React.FC<Props> = (props) => {
  const { coursesList } = props;

  return (
    <div className="flex flex-col xl:flex-row flex-wrap gap-[2.5rem]">
      {coursesList.map((course) => (
        <CourseCard key={course.id} details={course} />
      ))}
    </div>
  );
};

CoursesList.defaultProps = {};

export default CoursesList;
