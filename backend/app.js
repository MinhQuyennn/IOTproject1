const express = require("express");
const attendanceRouters = require("./routes/attendance");

require("dotenv").config();

const cors = require("cors");

//const mysql = require("mysql2");
const bodyParser = require("body-parser");

//const db = require("./config/database");
const configViewEngine = require("./config/viewEngine");
const app = express();

const port = process.env.PORT || 8888;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
// Config template engine
configViewEngine(app);

// define all our routes
app.use("/", attendanceRouters);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});

db.query("SELECT 1 + 3", (error, results, fields) => {
  if (error) {
    console.error("Error connecting to MySQL:", error.message);
    return;
  }
  console.log("Connected to database!");
});
