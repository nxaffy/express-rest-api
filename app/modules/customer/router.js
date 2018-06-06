var router = require('express').Router()
import { getCustomers } from './customer-controller';

router.get('/customers', getCustomers)

export default router;
