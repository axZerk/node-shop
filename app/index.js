// Core modules
import path from 'path';
import express from 'express';

// Custom modules
import { shopRoutes, errorRoutes, authRoutes } from './routes';

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', 'pug');

// Templating
app.set('views', path.resolve(__dirname, 'views'));

// Routes
app.use('/', shopRoutes);
app.use('/', authRoutes);
app.use(errorRoutes);

app.listen(4040, () => {
  console.log('App is running in port 4040');
});
