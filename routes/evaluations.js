const express = require('express');
const router = express.Router();
const evaluationsCtrl = require('../controllers/evaluations');
// refer to it as name in show
router.post('/employees/:id/evaluations', evaluationsCtrl.create);


module.exports = router