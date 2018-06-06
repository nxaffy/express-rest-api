import express from 'express'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import homeRoutes from './site/router';
import {config} from './config/app'
import customerRoutes from './modules/customer/router'

let app = express()
let appPrefix = config.log.prefix;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(appPrefix, homeRoutes)
app.use(appPrefix, customerRoutes)

export default app;
