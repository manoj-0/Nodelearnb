const h1 = require("handy-log");
const express = require("express");
const app = express();
//for parsing the save to json data middle ware
app.use(express.json());

app.get("/", function (req, res) {
  console.log(req.query.name);
  res.send("Hello World from get");
  // console.log("after");
});
app.post("/", () => fu_get(req, res));
app.delete("/:id", function (req, res) {
  console.log(req.params.id);
  return res.send("Hello World from delete");
});
app.put("/:id", function (req, res) {
  console.log(req.params.id);
  return res.send("Hello World from put");
});

// controllers
function fu_get(req, res) {
  console.log(req.query.name);
  res.send("Hello World from get");
  // console.log("after");
}

app.listen(3000, function () {
  h1.rainbow("app is running");
});
