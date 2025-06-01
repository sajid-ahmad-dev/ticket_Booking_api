const homeController = (req, res) => {
  res.json({ msg: "Ok, i m from controller module" });
};

module.exports = { homeController };
