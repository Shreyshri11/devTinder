const express = require('express') ;
//create a new application of express

const app = express() ;
// this is an instance of express JS application
// you had a new web server

//request handler

app.use("/user", (req, res) => {
    res.send("hahahahahhahaaha") ;
})

//this will only handle GET call /user
app.get("/user", (req, res) => {
    res.send({firstName: "Shrey", lastName: "Srivastava", email: "srivastavashrey01@gmail.com"}) ;
})

app.post("/user", (req, res) => {
    // console.log("save data to the database") ;
    //save data to DB
    res.send("Data successfully saved to the database") ;
});

app.delete("/user", (req, res) => {
    res.send("data deleted successfully") ;
})

//this will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
    res.send("Hello from the server!") ;
})

app.listen(3001, () => {
    console.log("Server is successfully listening on port 3001....") ;
}) ;