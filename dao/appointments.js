
const mongoose = require("mongoose");  //hUZJVJvGUOFWH3BU
const model = require("../Models/appointment") 
const constants = require('../helper/constants');

// Connect to MongoDB

// mongodb+srv://mayurmspatange:hUZJVJvGUOFWH3BU@vedanta.v2mtfxr.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(constants.constants.MONGO_BASE_URL, { useNewUrlParser: true });
// mongoose.connect("mongodb://127.0.0.1:27017/Vedanta", { useNewUrlParser: true });

async function addAppointment(appointment) {
    return new Promise((resolve, reject) => {
      const appointmentDetails = {
        doctorName: appointment.doctorName,
        patientName: appointment.patientName,
        service: appointment.service,
        status: appointment.status,
        appointmentTime: appointment.appointmentTime,
        appointmentDate: appointment.appointmentDate,
        appointmentDuration: appointment.appointmentDuration
      }
        const connModel = mongoose.model("appointment", model.appointment);
        const newDoc = new connModel(appointmentDetails);
        newDoc.save((err, result) => {
            if (err) {
                console.log(err);
                reject({ status: 500, message: "Internal server Error" });
            } else {
                console.log("add appointment to database", result);
                resolve({ status: 200, task: result });
            }
        });
    });
}

async function getAllAppointment() {
    return new Promise((resolve, reject) => {
      const connModel = mongoose.model("appointment", model.appointment);
        connModel.find({},{ _id: 0, __v: 0 }, function (err, docs) {
        if (err) {
          console.log(err);
          reject ({ status: 500, message: "Internal server Error" });
        } else {
          console.log("patient list collection",docs);
          resolve (docs);
        }
      });
    });
    
}

async function getAppointmentsByQuery(query) {
    return new Promise((resolve, reject) => {
      const connModel = mongoose.model("appointment", model.appointment);
      connModel.find( query ,{ _id: 0, __v: 0 }, function (err, docs) {
        if (err) {
          console.log(err);
          reject ({ status: 500, message: "Internal server Error" });
        } else {
          console.log("appointment list collection by name ",docs);
          resolve (docs);
        }
      });
    });
  }

module.exports = {
    addAppointment,
    getAllAppointment,
    getAppointmentsByQuery
};
