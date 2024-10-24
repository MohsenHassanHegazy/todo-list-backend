const express = require("express");

const router = express.Router();

const controlers = require("../controlers/tasks");

//get tasks
router.get("/", controlers.getTasks);

//add task

//update task

//finish task

module.exports = router;
