const employeeSchema = require('../model/EmployeeSchema');

exports.addEmployee = (req,res)=>{
 
    const employee = new employeeSchema(req.body);
    employee.save((err,data)=>{
        if(err){
            res.status(500).json({
                message: "Some error occurred while creating the employee.",
            });
        }
        else{
            res.status(200).json({
                message: "Employee created successfully",
            })
        }
    })
}
exports.getEmployees = (req,res)=>{

    employeeSchema.find().exec((err,data)=>{
        if(err){
            res.status(500).json({
                message: "Some error occurred while retrieving the employees.",
            });
        }
        else{
            res.status(200).json({
                message: "Employees retrieved successfully",
                data: data
            })
        }
    })
  
    // employeeSchema.find((err,data)=>{
    //     if(err){
    //         res.status(500).json({
    //             message: "Some error occurred while retrieving the employees.",
    //         });
    //     }
    //     else{
    //         res.status(200).json({
    //             message: "Employees retrieved successfully",
    //             data: data
    //         })
    //     }
    // })

}