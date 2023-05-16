const Employee = require('../models/employee')

// get all of the employees of the currently signed in user
function index(req, res, next) {
    // in employee theres is a field named user, I search for that user and am passing him/her in
    Employee.find({ })
    .then(employees => {
        res.render('employees/index', {
            employees,
            title: 'My Employees'
        })
    })
    // if there is a problem pass to error handler
    .catch(next)
}

// show a form to intake new employee info
function newEmployee(req, res) {
    res.render('employees/new', { title: 'New Employee'})
}

// CRUD
// create
function create(req, res, next) {
   // saving myself time, would like req.body (the form the user is filling out to have the current signed in user info aka user name: 'blah', user: 'object id value')
   req.body.user = req.user._id
   req.body.license = !! req.body.license
   Employee.create(req.body)
   .then(() => res.redirect('/employees'))
   .catch(next) 
}
// read
function show(req, res, next) {
    // find a single employee and render it to the page
    Employee.findById(req.params.id)
    .then(employee => {
        res.render('employees/show', {
            employee, 
            title: 'Employee Details'
        })
    })
    .catch(next)
}

//render a form to update employee
function updateEmployeeForm(req, res, next) {
    Employee.findById(req.params.id)
    .then(employee => {
        res.render('employees/edit', {
            employee,
            title: 'Employee Edit Detail'
        })
    })
}

// Update
function update(req, res, next) {
    req.body.license = !! req.body.license
    Employee.findById(req.params.id)
    // if the current user is not signed in as a manager, they won't be able to update 
    .then(employee => {
        // if (!employee.user.equals(req.user._id)) throw new Error('Unauthorized user')
        // if user is the signed in user and is a manager
        return employee.updateOne(req.body)
    })
    .then(() => res.redirect(`/employees/${req.params.id}`))
    .catch(next)
}
// Delete
function deleteEmployee(req, res, next) {
    Employee.findById(req.params.id)
    .then(employee => {
        // if (!employee.user.equals(req.user._id)) throw new Error('Unauthorized User')
        return employee.deleteOne()
    })
    .then(() => res.redirect('/employees'))
    .catch(next)
}

module.exports = {
    index,
    newEmployee,
    create,
    show,
    updateEmployeeForm,
    update,
    deleteEmployee
}