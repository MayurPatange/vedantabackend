var express = require('express'),
   router = express.Router();
const patient = require('../dao/patient');
const appointment = require('../dao/appointments');
const prescription = require('../dao/prescription');


// ***********************   patient   *********************** // 



router.post('/patient/addPatient', async (req, res) => {

   console.log("req.body", req.body);
   let ress = await patient.addPatient(req.body);
   console.log("safsfassa", ress);
   res.send(ress);
});


router.get('/patients', async(__req, res) => {
   let ress = await patient.getAllPatient();
   res.status(200).send(ress)
});


router.get('/patient/:name', async(req, res) => {
   console.log("req.params.name",req.params.name)
   let ress = await patient.getPatientByName(req.params.name);
   res.status(200).send(ress)
});


// ***********************    Appointment  *********************** // 

router.post('/appointments/addAppointment', async (req, res) => {

   console.log("req.body", req.body);
   let ress = await appointment.addAppointment(req.body);
   console.log(" addAppointment ", ress);
   res.send(ress);
});


router.get('/appointments', async (req, res) => {
   let ress = await appointment.getAllAppointment();
   console.log("get Appointments ", ress)
   res.status(200).send(ress)
});

router.get('/appointments/:name', async(req, res) => {
   console.log("req.params.name",req.params.name)
   let ress = await appointment.getAppointmentsByPatientName(req.params.name);
   res.status(200).send(ress)
});






// ***********************    prescription  *********************** // 

router.post('/prescription/addPrescription', async (req, res) => {

   console.log("req.body", req.body);
   let ress = await prescription.addPrescription(req.body);
   console.log("prescription adding", ress);
   res.send(ress);
});


router.get('/prescription', async (req, res) => {
   let ress = await prescription.getAllPrescription();
   console.log("get Appointments ", ress)
   res.status(200).send(ress)
});

router.get('/prescription/:name', async(req, res) => {
   console.log("req.params.name",req.params.name)
   let ress = await prescription.getPrescriptionsByPatientName(req.params.name);
   res.status(200).send(ress)
});

module.exports = router;


