const Employee = require('../models/employee');

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