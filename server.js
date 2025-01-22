import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import authRouters from './src/routes/authRouters.js';
import pageRoutes from './src/routes/pageRoutes.js';

dotenv.config();
const app = express();
const __dirname = path.resolve();

// Server configuration
const PORT = process.env.PORT || 3000;

// EJS configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', pageRoutes);
app.use('/api/auth', authRouters);

// Init server
app.listen(PORT, () => {
  console.log(`Server ${process.env.APP_NAME} is running on port ${PORT}`);
});
