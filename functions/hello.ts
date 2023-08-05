// domain/.netlify/functions/hello

exports.handler = async (event: any, context: any) => {
  return {
    statusCode: 200,
    body: "Hello World",
  };
};
