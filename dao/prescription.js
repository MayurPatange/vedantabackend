
const mongoose = require("mongoose");  //hUZJVJvGUOFWH3BU
const model = require("../Models/prescription") 
const constants = require('../helper/constants');

// Connect to MongoDB

// mongodb+srv://mayurmspatange:hUZJVJvGUOFWH3BU@vedanta.v2mtfxr.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(constants.constants.MONGO_BASE_URL, { useNewUrlParser: true });
async function addPrescription(Prescription) {
    return new Promise((resolve, reject) => {
        const connModel = mongoose.model("prescription", model.prescription);
        const newDoc = new connModel(Prescription);
        newDoc.save((error, result) => {
            if (error) {
                console.log(error);
                reject({ status: 500, message: "Internal server Error" });
            } else {
                console.log("add Prescription to database", result);
                resolve({ status: 200, task: result });
            }
        });
    });
}

// async function getAllPrescription() {
//     return new Promise((resolve, reject) => {
//       const connModel = mongoose.model("prescription", model.prescription);
//         connModel.find({},{ _id: 0, __v: 0 }, function (err, docs) {
//         if (err) {
//           console.log(error);
//           reject ({ status: 500, message: "Internal server Error" });
//         } else {
//           console.log("prescription list collection",docs);
//           resolve (docs);
//         }
//       });
//     });
// }

async function getPrescriptions(query) {
    return new Promise((resolve, reject) => {
      const connModel = mongoose.model("prescription", model.prescription);
      connModel.find(query , { _id: 0, __v: 0 }, function (err, docs) {
        if (err) {
          console.log(error);
          reject ({ status: 500, message: "Internal server Error" });
        } else {
          console.log("get prescriptions list collection by name",docs);
          resolve (docs);
        }
      });
    });
  }

module.exports = {
    addPrescription,
    // getAllPrescription,
    getPrescriptions
};
