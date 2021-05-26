import { getCourses, getSearchedCourses, getOneCourse } from "./courseModel";
//  build logger for issues
import HttpStatus from "http-status-codes";

export async function getAll() {
  try {
    const result = await getCourses(req, res);
    res.status(HttpStatus.OK).json(result);
  } catch (error) {
    //   run logging function
    console.error(error);
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getAllThatMatch(res, req) {
  const searchTerm = req.params.searchTerm;
  try {
    const result = await getSearchedCourses(title);
    if (result == 0) {
      res.status(HttpStatus.NOT_FOUND).send("No Course with That Title");
    } else {
      res.status(HttpStatus.OK).json(result);
    }
  } catch (error) {
    //   run logging function
    console.error(error);
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function showOne(res, req) {
  const courseId = req.params.id;
  try {
    const result = await getOneCourse(courseId);
    if (result === 0) {
      res.status(HttpStatus.NOT_FOUND).send("Course Does Not Exist");
    } else {
      res.status(HttpStatus.OK).json(result.rows[0]);
    }
  } catch (error) {
    //   run logging function
    console.error(error);
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

export const courseController = {
  index: getAll,
  showMany: getAllThatMatch,
  show: showOne,
};
