"use strict";

export async function nick(event) {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully! And I'm happy that it works",
        input: event,
      },
      null, 2),
  };
}
