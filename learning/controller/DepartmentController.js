const departmentSchema = require("../model/DepartmentSchema");

exports.createDepartment = (req, res) => {
  const department = new departmentSchema(req.body);
  department.save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Some error occurred while creating the department.",
      });
    }
    else{
        res.status(200).json({
            message: "Department created successfully",
        })
    }
  });
};
