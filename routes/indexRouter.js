// routes/
const { Router } = require("express");
const indexRouter = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

// authorRouter.get("/", (req, res) => res.send("All authors"));
// authorRouter.get("/:authorId", (req, res) => {
//   const { authorId } = req.params;
//   res.send(`Author ID: ${authorId}`);
// });

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});
indexRouter.get("/new", (req, res) => {
  res.render("form", { title: "Form" });
});

module.exports = indexRouter;
