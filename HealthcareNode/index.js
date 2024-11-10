const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 7000; // You can change this to any port

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies

// In-memory storage for demo purposes (use a database in production)
let patients = [];

// Endpoint to add a patient
app.post("/patients", (req, res) => {
  const patientData = req.body;

  // Add validation if needed
  if (
    !patientData.first_name ||
    !patientData.last_name ||
    !patientData.address ||
    !patientData.phone ||
    !patientData.email ||
    !patientData.date_of_birth ||
    !patientData.department ||
    !patientData.doctor ||
    !patientData.patient_id ||
    !patientData.gender
  ) {
    return res.status(400).send({ error: "All fields are required." });
  }

  // Store the patient data
  patients.push(patientData);
  console.log("Received patient data:", patientData);
  res.status(201).send({
    message: "Patient added successfully!",
    patient: patientData, // Return the added patient data
  });
});
// Endpoint to get a specific patient's details by ID
app.get("/patients/:id", (req, res) => {
    const patientId = req.params.id;
    const patient = patients.find(p => p.patient_id === patientId);
  
    if (patient) {
      res.status(200).json(patient);
    } else {
      res.status(404).json({ error: "Patient not found" });
    }
  });

// Endpoint to get the list of all patients
app.get("/patients", (req, res) => {
    res.status(200).send(patients); // Send the patients array as the response
  });


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
