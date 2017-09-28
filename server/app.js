(function() {

  'use strict';

  // *** dependencies *** //
  const express = require('express');
  const cors = require('cors');


  const appConfig = require('./config/main-config.js');
  const routeConfig = require('./config/route-config.js');
  const errorConfig = require('./config/error-config.js');

  // *** express instance *** //
  const app = express();

  // use it before all route definitions
  // app.use(cors({origin: 'http://127.0.0.1:4200'}));
  app.use(cors({origin: '*'}));
  // *** config *** //
  appConfig.init(app, express);
  routeConfig.init(app);
  errorConfig.init(app);

  module.exports = app;

}());
