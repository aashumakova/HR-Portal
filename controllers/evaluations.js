const Employee = require('../models/employee');

// function create(req, res, next) {
//     console.log('req and params', req.params)
//     Employee.findById(req.params.id)
//     .then(employee => {
//         console.log('employee', employee)
//         employee.evaluation.push(req.body);
//         console.log('req.body in controller', req.body)
//         return employee.save()
//     })
//     // .then (() => res.redirect`/employees/${employee._id}`)
//     .then (() => res.redirect(`/employees/${req.params.employeeId}`))
//     .catch(next)
// }

// async function create(req, res) {
//     const employee = await Employee.findById(req.params.id);
  
//     req.body.user = req.user._id;
//     req.body.userName = req.user.name;
//     req.body.userAvatar = req.user.avatar;
  
//     employee.evaluation.push(req.body);
//     try {
//       await employee.save();
//     } catch (err) {
//       console.log(err);
//     }
//     res.redirect(`/employees/${employee._id}`);
//   }

function create(req, res) {
    return new Promise((resolve, reject) => {
      Employee.findById(req.params.id)
        .then((employee) => {
          req.body.user = req.user._id;
          req.body.userName = req.user.name;
          req.body.userAvatar = req.user.avatar;
        
          employee.evaluation.push(req.body);
          return employee.save();
        })
        .then((employee) => {
          res.redirect(`/employees/${employee._id}`);
          resolve();
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }
  
  

module.exports = {
    create
}