import 'babel-polyfill';
import express from 'express';

const port = process.env.PORT || '3000';

import { setupMiddleware, setupDefaultRoutes } from './middleware-setup';
import indexRoutes from './routes/index';

const app = express();

setupMiddleware(app);


app.use('/', indexRoutes);

setupDefaultRoutes(app);

app.set('port', port);

const appListen = () => {
  app.listen(port, function() {
    console.log(`Listening on port ${port}`);
  });
};

export default appListen;