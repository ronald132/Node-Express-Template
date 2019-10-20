const express = require("express");
const mongoose = require("mongoose");

const app = express();

const db_uri = require("./config/keys").mongoURI;

const users = require("./api/users");

//connect to MongoDB
mongoose
  .connect(db_uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB is connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello world"));

//use routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
