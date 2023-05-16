const express = require('express')
const router = express.Router()

const employeeCtrl = require('../controllers/employees')
const employee = require('../models/employee')
//localhost:3000/employees
router.get('/', employeeCtrl.index)
router.get('/new', employeeCtrl.newEmployee)
router.post('/',employeeCtrl.create)
router.get('/:id', employeeCtrl.show)
router.get('/:id/edit', employeeCtrl.updateEmployeeForm)
router.put('/:id/', employeeCtrl.update)
router.delete('/:id', employeeCtrl.deleteEmployee)

module.exports = router