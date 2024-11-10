import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  Alert,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
//still working on this screen
const AddPatientTest = ({ navigation }) => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState(null);
  const [type, setType] = useState("");
  const [nurse_name, setNurse] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [systolic, setSystolic] = useState("");
  const [condition_critical, setCritical] = useState("");
  const [patientId, setPatientId] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const category1 = [
    { label: "Blood Pressure", value: "Blood Pressure" },
    { label: "Emergency", value: "Emergency" },
    { label: "Cardiology", value: "Cardiology" },
    { label: "Neurology", value: "Neurology" },
  ];

  const critical = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];

  // action button for add patient test
  const handleAddButton = () => {
    if (
      !patientId ||
      !date ||
      !nurse_name ||
      !type ||
      !category ||
      !diastolic ||
      !systolic ||
      !condition_critical
    ) {
      Alert.alert("Validation Error", "Please fill in all fields.");
      return;
    }
    
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Add Test for a patient</Text>
        </View>
        <View style={styles.firstName}>
          <Text style={styles.label}>Patient ID:</Text>
          <TextInput
            editable={true}
            selectTextOnFocus={true}
            placeholder="Enter patient id"
            style={styles.input}
            value={patientId}
            onChangeText={(text) => setPatientId(text)}
          />
        </View>
        <View style={styles.firstName}>
          <Text style={styles.label}>Date</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter date"
            value={date}
            onChangeText={(text) => setDate(text)}
          />
        </View>
        <View style={styles.firstName}>
          <Text style={styles.label}>Category</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={category1}
            maxHeight={300}
            labelField="label"
            valueField="value"
            value={category}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setCategory(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={styles.firstName}>
          <Text style={[styles.label, styles.phone]}>Type</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter type of test"
            value={type}
            onChangeText={(text) => setType(text)}
          />
        </View>
        <View style={styles.firstName}>
          <Text style={[styles.label, styles.phone]}>Nurse Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter name of the Nurse"
            value={nurse_name}
            onChangeText={(text) => setNurse(text)}
          />
        </View>

        <View style={styles.firstName}>
          <Text style={styles.label}>Diastolic</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Diastolic"
            value={diastolic}
            onChangeText={(text) => setDiastolic(text)}
          />
        </View>

        <View style={styles.firstName}>
          <Text style={styles.label}>Systolic</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Systolic"
            value={systolic}
            onChangeText={(text) => setSystolic(text)}
          />
        </View>
        <View style={styles.firstName}>
          <Text style={styles.label}>Critical</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={critical}
            maxHeight={300}
            labelField="label"
            valueField="value"
            value={condition_critical}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setCritical(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        {/* Buttons */}
        <View style={styles.buttons}>
          <View style={styles.buttonStyle}>
            <Button
              title="Add"
              style={styles.button}
              onPress={handleAddButton}
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
  buttons: {
    marginTop: 20,
    width: 350,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonStyle: {
    paddingLeft: 20,
    width: 150, // this way it works
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

export default AddPatientTest;
