
const mongoose = require("mongoose"); 


var appointment = new mongoose.Schema({
    patientName: String,
    doctorName:String,
    service:String,
    status: String,
    appointmentTime: String,
    appointmentDate: { type: Date, default: Date.now },
    appointmentDuration: Number
  });
  

  module.exports = {
    appointment
  };
  