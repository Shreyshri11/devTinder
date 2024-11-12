const express = require('express') ;
//create a new application of express

const app = express() ;
// this is an instance of express JS application
// you had a new web server

//request handler
app.use("/", (req, res) => {
    res.send("Namaste from the dashboard!") ;
})

app.use("/test", (req, res) => {
    res.send("Hello from the server!") ;
})

app.use("/hello", (req, res) => {
    res.send("Hello Hello Hello!") ;
})

app.listen(3001, () => {
    console.log("Server is successfully listening on port 3001....") ;
}) ;