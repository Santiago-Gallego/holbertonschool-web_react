import { getCourses } from "./courseSelector";
import coursesNormalizer from "../schema/courses";
import { fromJS, Map } from "immutable";

const courseList = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];
const normalizedCourses = coursesNormalizer(courseList);
const initialState = fromJS({ courses: normalizedCourses });

describe("courseSelector", () => {
  it("should return a list of the courses from within the reducer", () => {
    const result = getCourses(initialState);
    expect(result.toJS()).toEqual(courseList);
  });
});
