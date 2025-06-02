const { StatusCodes } = require("http-status-codes");

const home = (req, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "Api is Alive",
    data: {},
    error: {},
  });
};

module.exports = { home };
