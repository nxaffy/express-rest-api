import express from 'express'
import {config} from '../config/app'
let router = new express.Router()
let appPrefix = config.log.prefix;

function home (req, res) {
  res.json({'success':true})
}

router.get('/', home)

export default router;
