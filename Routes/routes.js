const express = require("express");
const router = express.Router();
// const path = require("path");
const KindahController = require("../Controller/controllers.js");

//index page
router.get("/", KindahController.getHomePage);

// Patient Routes
router.get("/patientDashboard", KindahController.getPatientDashboard);

router.get("/patientAppointments", KindahController.getPatientAppointments);

router.get("/patientVideo", KindahController.getPatientVideo);

router.get("/patientReqAppointment", KindahController.getPatientReqAppointment);

// video page
// router.get("/public/video", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "../", "public", "video.html"));
// });

module.exports = router;
