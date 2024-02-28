const mongoose = require('mongoose');

exports.connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'ajwt'
        });
        console.log("MongoDB connection Established...");
    } catch (error) {
        console.error(error.message);
    }
}