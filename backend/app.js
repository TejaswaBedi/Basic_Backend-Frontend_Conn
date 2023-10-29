const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");
app.use(express.json());
app.use(require("./router/auth"));
app.use(cookieParser());

const PORT = process.env.PORT;
const middleware = (req, res, next) => {
  console.log("Middle");
  next();
};

// app.get("/", (req, res) => {
//   res.send("Home");
// });

// app.get("/about", middleware, (req, res) => {
//   res.send("About");
// });

// app.get("/contact", (req, res) => {
//   res.send("Contact");
// });

app.get("/signin", (req, res) => {
  res.cookie("jwtoken", "demo");
  res.send("Signin");
});

app.get("/signup", (req, res) => {
  res.send("Signup");
});

app.listen(PORT, () => {
  console.log(`Server rumming ${PORT}`);
});
