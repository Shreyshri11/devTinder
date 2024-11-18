const express = require('express');
//create a new application of express

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth")
// this is an instance of express JS application
// you had a new web server

//request handler

//this will only handle GET call /user

//i can rewrite this authorization beautifully using middleware

//handle auth middleware for all requests
app.use("/admin", adminAuth);
app.use("/user", userAuth);

app.get("/user", userAuth, (req, res) => {
    res.send("all data sent");
});

app.get("/admin/getAllData", (req, res) => {
    res.send("all data sent");
});

app.get("/admin/deleteUser", (req, res) => {
    res.send("deleted a user");
});

app.listen(3001, () => {
    console.log("Server is successfully listening on port 3001....");
});