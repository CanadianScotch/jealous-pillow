exports.main = async (context = {}, sendResponse) => {
  const body = JSON.parse(context.body || "{}");
  const file = body.file || null;

  if (!file) {
    sendResponse({
      statusCode: 400,
      body: { message: "No file provided." }
    });
    return;
  }

  // Handle file logic here (this is just a stub)
  sendResponse({
    statusCode: 200,
    body: { message: "File received", file: file }
  });
};