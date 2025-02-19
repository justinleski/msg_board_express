const express = require("express");
const path = require("node:path");
const app = express();
const indexRouter = require("./routes/indexRouter");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// we have to use our router
app.use("/", indexRouter);

// app.get("/", (req, res) => {
//     res.render("index", { message: "EJS rocks!" });
// });

// app.get("/new", (req, res) => res.send("Hello"));





const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});