import express from 'express';
// import errorController from './controllers/errorController';

//
import shopRoutes from './routes/shopRoutes';
import errorRoutes from './routes/errorRoutes';

const app = express();

app.use('/', shopRoutes);
app.use(errorRoutes);

app.listen(4040, () => {
  console.log('App is running in port 4040');
});
