const mongoose = require('mongoose')
const connectDB = async () => {
    
    // Check if the MONGODB_URI is defined
    if (!process.env.MONGODB_URI) {
        console.error("Error: The MONGODB_URI environment variable is not defined.");
        process.exit(1); // Exit with failure
    }

    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB Connected: ${connection.connection.host}`)
    }
    catch (err) {
        console.error(err)
        process.exit(1) // 1 indicates an unspecified error
    }
}
module.exports = connectDB