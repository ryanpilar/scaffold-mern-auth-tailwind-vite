const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB Connected: ${connection.connection.host}`)
    }
    catch (err){
        console.error(err)
        process.exit(1) // 1 indicates an unspecified error
    }
}
module.exports = connectDB