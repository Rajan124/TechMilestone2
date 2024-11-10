import React from "react";
import AddPatientInfo from "../Screens/AddPatientInfo";
import { render, fireEvent } from "@testing-library/react-native";
//we get error for this one we are still trying for this one
it("add patient test", () => {
  const { getByText, getByPlaceholderText } = render(<AddPatientInfo />);

  const addPatientButton = getByText("Save");
  const firstNameInput = getByPlaceholderText("Enter your first name");
  const lastNameInput = getByPlaceholderText("Enter your last name");
  const phoneInput = getByPlaceholderText("Enter your phone number");
  const emailInput = getByPlaceholderText("Enter your email address");
  const addressInput = getByPlaceholderText("Enter your address");
  const dobInput = getByPlaceholderText("Enter your date of birth");
  const departmentInput = getByPlaceholderText("Enter the department");
  const doctorNameInput = getByPlaceholderText("Enter the name of doctor");
  const patientIdInput = getByPlaceholderText("Enter patient id");

  fireEvent.changeText(firstNameInput, "Ram");
  fireEvent.changeText(lastNameInput, "Thapa");
  fireEvent.changeText(phoneInput, "9876543219");
  fireEvent.changeText(emailInput, "ram@gmail.com");
  fireEvent.changeText(addressInput, "20 Celeste Drive");
  fireEvent.changeText(dobInput, "12/6/2023");
  fireEvent.changeText(departmentInput, "Emergency");
  fireEvent.changeText(doctorNameInput, "Jalir");
  fireEvent.press(patientIdInput, "10");
});
