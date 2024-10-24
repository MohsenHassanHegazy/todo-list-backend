const express = require("express");

const mongoose = require("mongoose");

const routes = require("./routes/routs");

const app = express();

app.use(routes);

mongoose
  .connect(
    "mongodb+srv://mohsen:RJKHcTHFIESNIfKg@cluster0test.mc0rmsv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0test/todolist"
  )
  .then((r) => {
    console.log("connect to db");
    app.listen(3000);
  });
