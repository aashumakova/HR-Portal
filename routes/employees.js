const express = require('express')
const router = express.Router()

const employeeCtrl = require('../controllers/employees')
const employee = require('../models/employee')
const isLoggedIn = require('../config/auth');
//localhost:3000/employees
router.get('/', employeeCtrl.index)
router.get('/new', isLoggedIn, employeeCtrl.newEmployee)
router.post('/', isLoggedIn, employeeCtrl.create)
router.get('/:id', isLoggedIn, employeeCtrl.show)
router.get('/:id/edit', isLoggedIn, employeeCtrl.updateEmployeeForm)
router.put('/:id/', isLoggedIn, employeeCtrl.update)
router.delete('/:id', isLoggedIn, employeeCtrl.deleteEmployee)

module.exports = router