
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import cardRoutes from './public/routes/cardRoutes.js'; 

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

app.use('/api/card', cardRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


export default app;
