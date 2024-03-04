const cors = require('cors');
const path = require('path')
const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/mongo')

dotenv.config();
connectDB()

const app = express();

const corsOptionsDelegate = function (req, callback) {
    let corsOptions;
    if (req.header('Origin') === process.env.CLIENT_URL) {
        corsOptions = { origin: true }; // Allow
    } else {
        corsOptions = { origin: false }; // Deny
    }
    callback(null, corsOptions);
};

app.use(cors(corsOptionsDelegate));

// --------------- BODY PARSER MIDDLEWARE ---------------- //
app.use(express.urlencoded( {extended: false}))
app.use(express.json());

// ----------------- LOGGING MIDDLEWARE ------------------ //
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// -------------------- Static Assets -------------------- //
app.use(express.static(path.join(__dirname, 'public')) )


// ------------------------ Routes ----------------------- //
app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 3000
app.listen(
    PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode, on port ${PORT}`)
)

module.exports = app;