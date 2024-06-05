const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        const connect = mongoose.connect(process.env.DB)
        console.log(`Database is Connected`);
    } catch (error) {
        console.log(`Database Connect Error ${error}`);
    }
}
module.exports = connectDB