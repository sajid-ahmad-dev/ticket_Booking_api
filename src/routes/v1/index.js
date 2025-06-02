const express = require("express");
const { homeController } = require("../../controllers");
const v1Routes = express.Router();

v1Routes.get("/home", homeController.home);

module.exports = v1Routes;
