const express = require("express");
const { server_Config } = require("./config");
const apiRoutes = require("./routes");
const app = express();
app.use("/api", apiRoutes);
app.listen(server_Config.PORT, () => {
  console.log(`Server is running on PORT : ${server_Config.PORT}`);
});
