import React from "react";
import { Button, View, Text, TouchableOpacity, StyleSheet } from "react-native";

function HomeScreen({ navigation }) {
  // action button for adding patients
  const handleAddPatient = () => {
    navigation.navigate("AddPatientInfo");
  };

  //action button for all patients
  const handleListPatient = () => {
    navigation.navigate("ListAllPatients");
  };

  // action button for adding patients
  const handleViewPatient = () => {
    navigation.navigate("ViewPatientInfo");
  };

  // action button for adding patients
  const handleAddPatientTest = () => {
    navigation.navigate("AddPatientTest");
  };

  // action button for adding patients
  const handleViewPatientTest = () => {
    navigation.navigate("ViewPatientTest");
  };

  const handleUpdatePatientTest = () => {
    navigation.navigate("UpdatePatientInfo");
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstSection}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handleAddPatient}>
            Add Patient Info
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handleViewPatient}>
            View Patient Info
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.firstSection}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handleAddPatientTest}>
            Add Patient Test
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handleViewPatientTest}>
            View Patient Test
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.firstSection}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handleUpdatePatientTest}>
            Update Patient Info
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handleListPatient}>
            All Patient Info
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  firstSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 180,
    height: 50,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  customButton: {
    backgroundColor: "#E91E63",
  },
  customButtonText: {
    fontWeight: "bold",
  },
});

export default HomeScreen;
