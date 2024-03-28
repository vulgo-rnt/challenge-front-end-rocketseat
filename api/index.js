const express = require("express");
const jsonGraphqlExpress = require("json-graphql-server").default;
const data = require("./db.js");
const cors = require("cors");

const PORT = 3333;
const app = express();

app.use(cors());
app.use("/", jsonGraphqlExpress(data));
app.listen(PORT, () => {
  console.log("server up...");
});
