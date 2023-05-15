const Employee = require('../models/employee')

// get all of the employees of the currently signed in user
function index(req, res, next) {
    // in employee theres is a field named user, I search for that user and am passing him/her in
    Employee.find({ user: req.user._id })
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
   Employee.create(req.body)
   .then(() => res.redirect('/employees'))
   .catch(next) 
}


module.exports = {
    index,
    newEmployee,
    create
}