import { StatusCodes, getReasonPhrase } from "http-status-codes";
import AWS from "aws-sdk";

const COURSE_TABLE = "course-table-dev";
const dynamoDb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

export async function getAll(req, res) {
  try {
    const params = {
      TableName: COURSE_TABLE,
    };

    dynamoDb.scan(params, function (error, data) {
      if (error) {
        console.error(error);
      } else {
        res.status(StatusCodes.OK).json(data.Items);
      }
    });
  } catch (error) {
    //   run logging function
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
    });
  }
}

export async function getAllThatContain(req, res) {
  var search = req.params.term;
  try {
    const params = {
      TableName: COURSE_TABLE,
      FilterExpression: "contains(title, :t)",
      ExpressionAttributeValues: {
        ":t": {
          S: search,
        },
      },
    };

    dynamoDb.scan(params, function (error, data) {
      console.log(params);
      if (error) {
        console.error(error);
      } else {
        res.status(StatusCodes.OK).json(data.Items);
      }
    });
  } catch (error) {
    //   run logging function
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
    });
  }
}

export const courseController = {
  index: getAll,
  showMany: getAllThatContain,
};
