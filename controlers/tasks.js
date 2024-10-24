const express = require("express");

exports.getTasks = (req, res, next) => {
  res.send("cool");
};

exports.addTask = (req, res, next) => {};

exports.updateTasks = (req, res, next) => {};

exports.deletTasks = (req, res, next) => {};
