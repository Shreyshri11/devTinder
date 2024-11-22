const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect(
        "mongodb+srv://srivastavashrey01:tOG5sxRoPa1DIrZ8@devtinder.srmtj.mongodb.net/"    
    );
};

module.exports = connectDB ;



