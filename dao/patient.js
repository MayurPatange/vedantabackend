const mongoose = require("mongoose"); 
const model = require("../Models/patient") 
const constants = require('../helper/constants');

// Connect to MongoDB

// mongodb+srv://mayurmspatange:hUZJVJvGUOFWH3BU@vedanta.v2mtfxr.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(constants.constants.MONGO_BASE_URL, { useNewUrlParser: true });

// updateOne({ email: 'test2@google.com' }, { email: 'test@google.com' });

async function addPatient(patient) {
  return new Promise((resolve, reject) => {
    const patientMapping = {
      initial: patient.nameTitle,
      name: patient.patientName,
      phoneNumber: patient.phoneNumber,
      gender: patient.gender,
      age: patient.age,
      dateOfbirth: patient.dateOfBirth, 
      preferredLanguage: patient.selectedLanguage,
      isMore: false,
      bloodGroup: patient.bloodGroup,
      referredBy: patient.doctor,
      referredBydDrSpecialty: patient.doctorSpeciality,
      email: patient.email,
      previousID: patient.previousId,
      address: patient.address,
      city: patient.city,
      pin: patient.pin,
      Occupation: patient.occupation,
      Tag: patient.tag,
      alternateMobile: patient.mobile2,
      image: patient.file,
    }
    console.log('patientMapping :', patientMapping);
    const connModel = mongoose.model("patient", model.patient);
    const newDoc = new connModel(patientMapping);
    newDoc.save((error, result) => {
      if (error) {
        console.log(error);
        reject ({ status: 500, message: "Internal server Error" });
      } else {
        console.log("addPatient to database", result);
        resolve ({ status: 200, task: result });
      }
    });
  });
}

async function getAllPatient() {
  return new Promise((resolve, reject) => {
    const connModel = mongoose.model("patient", model.patient);
    connModel.find({},{ _id: 0, __v: 0 }, function (err, docs) {
      if (err) {
        console.log(error);
        reject ({ status: 500, message: "Internal server Error" });
      } else {
        console.log("patient list collection",docs);
        resolve (docs);
      }
    });
  });
}


async function getPatientByName(name) {
  return new Promise((resolve, reject) => {
    const connModel = mongoose.model("patient", model.patient);
    connModel.findOne({ "name": name,},{ _id: 0, __v: 0 }, function (err, docs) {
      if (err) {
        console.log(error);
        reject ({ status: 500, message: "Internal server Error" });
      } else {
        console.log("patient collection",docs);
        resolve (docs);
      }
    });
  });
}

module.exports = {
  addPatient,
  getAllPatient,
  getPatientByName
};


