import cors from 'cors';
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/mongo.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB()

const app = express();

// ---------------------------------- CORS ----------------------------------- //

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
// -------------------------------- COOKIEs ---------------------------------- //

app.use(cookieParser());


// ------------------------- BODY PARSER MIDDLEWARE -------------------------- //
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// --------------------------- LOGGING MIDDLEWARE ---------------------------- //
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
// ------------------------------ Static Assets ------------------------------ //
if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '/ui/dist')));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'ui', 'dist', 'index.html'))
    );
} else {
    app.get('/', (req, res) => {
        res.send('API is running....');
    });
}
// ---------------------------------- Routes --------------------------------- //
app.use('/api/users', userRoutes);

// ------------------------------ Error Handling ----------------------------- //
app.use(notFound);
app.use(errorHandler)

// ------------------------------ PORT LISTENING ----------------------------- //
const PORT = process.env.PORT || 5000
app.listen(
    PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode, on port ${PORT}`)
)


