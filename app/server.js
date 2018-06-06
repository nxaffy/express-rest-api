import http from 'http';
import { log } from './helpers/logs';
import { APP_PORT } from './config/constants';
import app from './index';

const server = http.createServer(app);

server.listen(APP_PORT);
log.info('-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-');
log.info(`🌐  API listening on port ${APP_PORT}`);
log.info('-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-');
