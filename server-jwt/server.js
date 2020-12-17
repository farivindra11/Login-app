const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var indexRouter = require("./routes/index");

// parser app/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/", indexRouter);

app.listen(3000, () => {
  console.log(`Server started on port`);
});
