const express = require('express')
const router = express.Router()

const employeeCtrl = require('../controllers/employees')
//localhost:3000/employees
router.get('/', employeeCtrl.index)
router.get('/new', employeeCtrl.newEmployee)
router.post('/',employeeCtrl.create)

module.exports = router