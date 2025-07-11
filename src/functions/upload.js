exports.main = async (context = {}, sendResponse) => {
  sendResponse({
    statusCode: 200,
    body: { message: "Function is active." }
  });
};