const { model } = require("mongoose");

const userSchema = require("../model/UserSchema");
const { hashPassword1, comparePassword1 } = require("../util/Encrypt");
const authToken = require("../util/AuthToken");
const AuthSchema = require("../model/AuthSchema");

exports.LoginAuthUser = async (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  userSchema.findOne({ email: email }, async (err, data) => {
    if (err) {
      res.status(500).json({
        message: "error",
      });
    } else {
      if (data !== undefined || data != null) {
        var flag = await comparePassword1(password, data.password);
        if (flag) {
          AuthSchema.findOne({ user: data._id }, async (err, authdata) => {
            if (err) {
              res.status(500).json({
                message: "error",
              });
            } else {
              if (authdata !== undefined || authToken != null) {
                res.status(200).json({
                  message: "success",
                  token: authdata.token,
                });
              } else {
                res.status(404).json({
                  message: "user not found",
                });
              }
            }
          });
        }
      } else {
        res.status(404).json({
          message: "user not found",
        });
      }
    }
  });
};

exports.createAuthUser = async (req, res) => {
  const hashedPassword = await hashPassword1(req.body.password);
  console.log("hashedPassword", hashedPassword);
  var userData = {
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    age: req.body.age,
  };

  var user = new userSchema(userData);
  user.save(async (err, data) => {
    if (err) {
      res.status(500).json({
        message: "error",
      });
    } else {
      console.log("data", data);
      //db-->token
      const token = await authToken.generateToken(data);
      //token /// da USER ID -->
      var authData = {
        user: data._id,
        token: token,
      };
      var auth = new AuthSchema(authData);
      auth.save((err, data) => {
        if (err) {
          res.status(500).json({
            message: "error",
          });
        } else {
          res.status(201).json({
            message: "success",
            token: token,
          });
        }
      });
    }
  });
};

const mailer = require("../util/mailer");
//req,res
module.exports.testUser = (req, res) => {
  console.log("testUser");
  res.send("testUser");
};
module.exports.getAllUsers = (req, res) => {
  userSchema.find((err, data) => {
    if (err) {
      res.send("error");
    } else {
      res.status(200).json({
        message: "success",
        data: data,
      });
    }
  });
};
module.exports.creteUser = async (req, res) => {
  //create user object
  console.log("req body", req.body);
  const hashedPassword = await hashPassword1(req.body.password);
  console.log("hashedPassword", hashedPassword);
  var userData = {
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    age: req.body.age,
  };
  var user = new userSchema(userData);
  user.save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "error",
      });
    } else {
      mailer.sendMail(data.email);
      res.status(201).json({
        message: "success",
        data: data,
      });
    }
  });
};

exports.deleteUser = (req, res) => {
  var id = req.params.id;
  userSchema.findByIdAndDelete(id, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "error",
      });
    } else {
      if (data == null) {
        res.status(404).json({
          message: "not found",
        });
      } else {
        res.status(200).json({
          message: "success",
          data: data,
        });
      }
    }
  });
};
exports.getUserById = (req, res) => {
  var id = req.params.id;
  userSchema.findById(id, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "error",
      });
    } else {
      if (data != null) {
        res.status(200).json({
          message: "success",
          data: data,
        });
      } else {
        res.status(404).json({
          message: "not found",
        });
      }
    }
  });
};

exports.updateUser = (req, res) => {
  var id = req.params.id;
  userSchema.findByIdAndUpdate(id, req.body, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "error",
      });
    } else {
      if (data != null) {
        res.status(200).json({
          message: "success",
          data: data,
        });
      } else {
        res.status(404).json({
          message: "not found",
        });
      }
    }
  });
};

exports.loginUser = async (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  userSchema.findOne({ email: email }, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "error",
      });
    } else {
      if (data) {
        comparePassword1(password, data.password).then((result) => {
          if (result) {
            res.status(200).json({
              message: "success",
              data: data,
            });
          } else {
            res.status(401).json({
              message: "unauthorized",
            });
          }
        });
      } else {
        res.status(404).json({
          message: "not found",
        });
      }
    }
  });
};
