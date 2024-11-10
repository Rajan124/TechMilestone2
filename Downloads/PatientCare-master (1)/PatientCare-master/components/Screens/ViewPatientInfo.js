import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import axios from "axios";

function ViewPatientInfo({ navigation }) {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Fetch the list of patients when the component mounts
    axios.get("http://10.0.2.2:7000/patients")  // Update with your server IP if needed
      .then((response) => {
        setPatients(response.data);  // Assume data is an array of patients
      })
      .catch((error) => {
        console.error("Error fetching patients:", error);
      });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}>Patient Information</Text>

        {patients.map((patient, index) => (
          <View key={index} style={styles.patientContainer}>
            <Text style={styles.label}>First Name: <Text style={styles.value}>{patient.first_name}</Text></Text>
            <Text style={styles.label}>Last Name: <Text style={styles.value}>{patient.last_name}</Text></Text>
            <Text style={styles.label}>Gender: <Text style={styles.value}>{patient.gender}</Text></Text>
            <Text style={styles.label}>Phone: <Text style={styles.value}>{patient.phone}</Text></Text>
            <Text style={styles.label}>Email: <Text style={styles.value}>{patient.email}</Text></Text>
            <Text style={styles.label}>Address: <Text style={styles.value}>{patient.address}</Text></Text>
            <Text style={styles.label}>Date of Birth: <Text style={styles.value}>{patient.date_of_birth}</Text></Text>
            <Text style={styles.label}>Department: <Text style={styles.value}>{patient.department}</Text></Text>
            <Text style={styles.label}>Doctor: <Text style={styles.value}>{patient.doctor}</Text></Text>
          </View>
        ))}

        <Button title="Go Back" onPress={() => navigation.goBack()} color="tomato" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  patientContainer: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    fontWeight: "normal",
  },
});

export default ViewPatientInfo;
