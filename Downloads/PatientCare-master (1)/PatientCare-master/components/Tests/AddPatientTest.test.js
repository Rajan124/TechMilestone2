import React from "react";
import AddPatientTest from "../Screens/AddPatientTest";
import { render, fireEvent } from "@testing-library/react-native";

it("add test of a patient test", () => {
  const { getByText, getByPlaceholderText } = render(<AddPatientTest />);

  const addPatientButton = getByText("Add");
  const cancelButton = getByText("Cancel");
  const patientId = getByPlaceholderText("Enter patient id");
  const dateInput = getByPlaceholderText("Enter date");
  const typeInput = getByPlaceholderText("Enter type of test");
  const nurseNameInput = getByPlaceholderText("Enter name of the Nurse");
  const diastolicInput = getByPlaceholderText("Enter Diastolic");
  const systolicInput = getByPlaceholderText("Enter Systolic");

  fireEvent.changeText(patientId, "10");
  fireEvent.changeText(dateInput, "12/6/2023");
  fireEvent.changeText(typeInput, "Test");
  fireEvent.changeText(nurseNameInput, "Rita");
  fireEvent.changeText(diastolicInput, "100");
  fireEvent.changeText(systolicInput, "120");
});
