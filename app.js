const { PythonShell } = require("python-shell");
// const express = require("express");
// const app = express();

// app.listen(5000, function () {
//   console.log("running...");
// });

// app.get("/name", callName);
// function callName(req, res) {
//   const Spawn = require("child_process").spawn;
//   const Process = Spawn("python", ["./hello.py", req.query.firstname]);

//   process.stdout.on("data", function (data) {
//     res.send(data.toString());
//   });
// }

let options = {
  scriptPath: "C:/Users/GAURAV/Desktop/SIH/backend/Python/SIH-stillwitherror/",
  args: "election",
};
PythonShell.run("themain.py", options, (err, res) => {
  if (err) console.log(err);
  if (res) console.log(res.toString());
});
