const express = require('express');
//create a new application of express

const app = express();
// this is an instance of express JS application
// you had a new web server

//request handler

//this will only handle GET call /user
app.get(
    "/user",
    [
    (req, res, next) => {
        //route handler
        console.log("Handling the route user!!");
        next();
    },
    (req, res, next) => {
        //route handler
        console.log("Handling the route user 2!!");
        // res.send("2nd Response!!");
        next() ;
    },
    (req, res, next) => {
        //route handler
        console.log("Handling the route user 3!!");
        // res.send("3rd Response!!");
        next() ;
    },
    (req, res, next) => {
        //route handler
        console.log("Handling the route user 4!!");
        // res.send("4th Response!!");
        next() ;
    },
    (req, res, next) => {
        //route handler
        console.log("Handling the route user 5!!");
        res.send("5th Response!!");
        next() ;
    }
]);

app.listen(3001, () => {
    console.log("Server is successfully listening on port 3001....");
});