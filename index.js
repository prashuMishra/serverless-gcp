
const express = require('serverless-express/express');
// const { serverless } = require("@probot/serverless-gcf");
 
const app = express();
app.get('/login', (req, res) => {
  res.send({message:"Welcome to Serverless express!!"})
});

module.exports.server = app;