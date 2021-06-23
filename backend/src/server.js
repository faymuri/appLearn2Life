const express = require("express");
const expresshbs = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");

// Initialization

const app = express();

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

// Settings

app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  expresshbs({
    defaultLayout: "default",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

// Middlewares

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// Global Variables

// Routes

app.use(require("./routes/index.routes"));
app.use(require("./routes/assignments.routes"));
app.use(require("./routes/users.routes"));

// Static files

app.use(express.static(path.join(__dirname, "public")));

module.exports = app;


