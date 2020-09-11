import React from 'react'
import ContactForm from './ContactForm'
import App from '../App'
import { render, screen, fireEvent, getByText } from "@testing-library/react";


test("renders correctly with first name", () => {
  render(<ContactForm />);


  const fName = screen.getByTestId(/firstName/i)
  const lName = screen.getByTestId(/lastName/i)
  const email = screen.getByTestId(/email/i)
  const message = screen.getByTestId(/message/i)
  const submit = screen.getByTestId(/submit/)


  fireEvent.change(fName, {
    target: {value: "Eric" }
  });
  fireEvent.change(lName, {
    target: {value: "Capiz" }
  });
  fireEvent.change(email, {
    target: {value: "ericcapiz@gmail.com" }
  });
  fireEvent.change(message, {
    target: {value: "Sample message goes here" }
  });
  fireEvent.click(submit);



});