exports.getHomePage = (req, res, next) => {
  res.render("index", {
    pageTitle: "Kindah Home",
  });
};

//Patient Routes

exports.getPatientDashboard = (req, res, next) => {
  res.render("Patient/patientDashboard.ejs", {
    pageTitle: "Patient Dashboard",
  });
};

exports.getPatientAppointments = (req, res, next) => {
  res.render("Patient/patientAppointments.ejs", {
    pageTitle: "Patient Appointments ",
  });
};

exports.getPatientVideo = (req, res, next) => {
  res.render("Patient/patientVideo.ejs", {
    pageTitle: "Patient Video Call ",
  });
};

exports.getPatientReqAppointment = (req, res, next) => {
  res.render("Patient/patientReqAppointment.ejs", {
    pageTitle: "Patient Video Call ",
  });
};

//Doctors Routes
