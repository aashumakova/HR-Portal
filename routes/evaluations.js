const express = require('express');
const router = express.Router();
const evaluationsCtrl = require('../controllers/evaluations');
const isLoggedIn = require('../config/auth');
// refer to it as name in show
router.post('/employees/:id/evaluations', isLoggedIn, evaluationsCtrl.create);


module.exports = router