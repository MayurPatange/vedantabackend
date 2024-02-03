
const mongoose = require("mongoose");  //hUZJVJvGUOFWH3BU
const model = require("../Models/prescription") 

// Connect to MongoDB

// mongodb+srv://mayurmspatange:hUZJVJvGUOFWH3BU@vedanta.v2mtfxr.mongodb.net/?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://mayurmspatange:hUZJVJvGUOFWH3BU@vedanta.v2mtfxr.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });
// mongoose.connect("mongodb://127.0.0.1:27017/Vedanta", { useNewUrlParser: true });

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

async function getAllPrescription() {
    return new Promise((resolve, reject) => {
      const connModel = mongoose.model("prescription", model.prescription);
        connModel.find({},{ _id: 0, __v: 0 }, function (err, docs) {
        if (err) {
          console.log(error);
          reject ({ status: 500, message: "Internal server Error" });
        } else {
          console.log("prescription list collection",docs);
          resolve (docs);
        }
      });
    });
}

async function getPrescriptionsByPatientName(name) {
    return new Promise((resolve, reject) => {
      const connModel = mongoose.model("prescription", model.prescription);
      connModel.find({ "patientName": name, "visitNumber": 3},{ _id: 0, __v: 0 }, function (err, docs) {
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
    getAllPrescription,
    getPrescriptionsByPatientName
};
