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
import { Dropdown } from "react-native-element-dropdown";
//Still Working
const UpdatePatientInfo = ({ navigation }) => {
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

  const handleUpdate = () => {
    if (
      !first_name ||
      !last_name ||
      !address ||
      !phone ||
      !email ||
      !date_of_birth ||
      !department ||
      !doctor ||
      !patient_id
    ) {
      Alert.alert("Validation Error", "Please fill in all fields.");
      return;
    }
    if (phone.length != 10) {
      Alert.alert(
        "Validation Error",
        "Please enter a valid 10-digit phone number."
      );
    }

   
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Update Patient Information</Text>
        </View>

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
            style={[styles.Dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={genders}
            maxHeight={100}
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
            placeholder="Enter your email Address"
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
            placeholder="Enter your Date of Birth"
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
        <View style={styles.buttons}>
          <View style={styles.buttonStyle}>
            <Button
              title="Update"
              style={styles.button}
              onPress={handleUpdate}
              color="tomato"
            />
          </View>

          <View style={styles.buttonStyle}>
            <Button
              title="Cancel"
              style={styles.button}
              onPress
              color="tomato"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
  Dropdown: {
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
  buttons: {
    marginTop: 20,
    width: 350,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonStyle: {
    paddingLeft: 20,
    width: 150,
  },
  button: {
    height: 20,
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

export default UpdatePatientInfo;
