const express = require('express');
//create a new application of express
const connectDB = require("./config/database.js");//tOG5sxRoPa1DIrZ8
const app = express();
const User = require("./models/user.js")

//middleware that convert json into js object
app.use(express.json()) ;

app.post("/signup", async (req, res) => {
    // creating an instance of usermodel
    const user = new User(req.body);

    try {
        await user.save();// this data will saved on the database
        res.send("user added successfully");
    } catch (err) {
        res.status(400).send("Error saving the user" + err.message) ;
    }
});

connectDB()
    .then(() => {
        console.log("database connection is successful...");
        app.listen(3001, () => {
            console.log("Server is successfully listening on port 3001....");
        });
    })
    .catch(err => {
        console.log("Database cannot be connected!!");
    })
