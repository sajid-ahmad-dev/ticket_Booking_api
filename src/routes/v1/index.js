const express = require("express");
const { home } = require("../../controllers");
const v1Routes = express.Router();

v1Routes.get("/home", home.homeController);

module.exports = v1Routes;
