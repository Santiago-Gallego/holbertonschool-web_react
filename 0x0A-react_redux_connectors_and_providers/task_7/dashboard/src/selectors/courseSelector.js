export const getCourses = (state) => {
  const courses = state.getIn(["courses", "entities", "courses"]);
  return courses.valueSeq();
};
