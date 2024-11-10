import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
} from "react-native";
import axios from "axios";
import { Dropdown } from "react-native-element-dropdown";

function AddPatientInfo({ navigation }) {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date_of_birth, setDob] = useState("");
  const [department, setDepartment] = useState("");
  const [doctor, setDoctorName] = useState("");
  const [patient_id, setIdPatient] = useState("");
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const genders = [
    { label: "Select Gender" },
    { label: "Male", value: "1" },
    { label: "Female", value: "2" },
  ];

  const handleSaveButton = () => {
    if (
      !first_name ||
      !last_name ||
      !address ||
      !phone ||
      !email ||
      !date_of_birth ||
      !department ||
      !doctor ||
      !patient_id ||
      !value
    ) {
      Alert.alert("Validation Error", "Please fill in all fields.");
      return;
    }
    if (phone.length != 10) {
      Alert.alert(
        "Validation Error",
        "Please enter a valid 10-digit phone number."
      );
      return;
    }

    // create object for patients
    const newPatient = {
      first_name,
      last_name,
      gender: value,
      address,
      date_of_birth,
      department,
      doctor,
      patient_id,
      phone,
      email
    };

    console.log("New Patient Data: ", newPatient);

    // sending post request to server
    axios
      // .post("http://192.168.2.110:7000/patients", newPatient)
      .post("http://10.0.2.2:7000/patients", newPatient)
      .then((response) => {
        console.log("Patient added successfully: ", response.data);
        alert("Patient added successfully");
        navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        if (error.response) {
            console.error("Error Response:", error.response);
        } else if (error.request) {
            console.error("Error Request:", error.request);
        } else {
            console.error("Error Message:", error.message);
        }
      });
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.firstName}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your first name"
              value={first_name}
              onChangeText={(text) => setFirstName(text)}
            />
          </View>

          <View style={styles.firstName}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your last name"
              value={last_name}
              onChangeText={(text) => setLastName(text)}
            />
          </View>
          <View style={styles.firstName}>
            <Text style={styles.label}>Gender</Text>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={genders}
              maxHeight={300}
              labelField="label"
              valueField="value"
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>

          <View style={styles.firstName}>
            <Text style={[styles.label, styles.phone]}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              value={phone}
              onChangeText={(text) => setPhone(text)}
            />
          </View>

          <View style={styles.firstName}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email address"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.firstName}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your address"
              value={address}
              onChangeText={(text) => setAddress(text)}
            />
          </View>

          <View style={styles.firstName}>
            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your date of birth"
              value={date_of_birth}
              onChangeText={(text) => setDob(text)}
            />
          </View>
          <View style={styles.firstName}>
            <Text style={styles.label}>Department</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the department"
              value={department}
              onChangeText={(text) => setDepartment(text)}
            />
          </View>

          <View style={styles.firstName}>
            <Text style={styles.label}>Doctor</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the name of doctor"
              value={doctor}
              onChangeText={(text) => setDoctorName(text)}
            />
          </View>
          <View style={styles.firstName}>
            <Text style={styles.label}>Patient id</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter patient id"
              value={patient_id}
              onChangeText={(text) => setIdPatient(text)}
            />
          </View>

          {/* Buttons */}
          <Button
            testID="MyButton.Button.ClickMe"
            title="Save"
            onPress={handleSaveButton}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 40,
    justifyContent: "center",
  },
  header: {
    backgroundColor: "blue",
    height: 60,
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
    flexDirection: "row",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  firstName: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  dropdown: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 5,
    marginBottom: 9,
    marginTop: 4,
  },
  selectedTextStyle: {
    fontSize: 14,
  },

  inputSearchStyle: {
    height: 14,
    fontSize: 14,
  },

  label: {
    fontSize: 18,
    marginBottom: 5,
    width: 110,
  },
  phone: {
    marginTop: 10,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
});

export default AddPatientInfo;
