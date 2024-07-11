const express = require("express");
const cors = require("cors");
const config = require("./app/config/app.config");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync Db");
  initial();
});
// db.sequelize.sync();

function initial() {
  Role.create({
    id: 1,
    name: "user",
  }).catch((err) => {
    if (err) console.log("Role 'user' already exists");
  });

  Role.create({
    id: 2,
    name: "moderator",
  }).catch((err) => {
    if (err) console.log("Role 'user' already exists");
  });

  Role.create({
    id: 3,
    name: "admin",
  }).catch((err) => {
    if (err) console.log("Role 'user' already exists");
  });
}

// simple route
app.get("/", (req, res) => {
  res.json({ message: `Welcome to ${config.APP_NAME}` });
});

// routes
// authentication routes
require("./app/routes/auth.routes")(app);

// user routes
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = config.APP_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
