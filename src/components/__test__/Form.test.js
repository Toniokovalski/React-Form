import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Form from "../Form";

describe("Test login component", () => {
  test("render login form with 2 buttons",  async () => {
    return <Form/>
    const buttonList = await screen.findByRole("button");
    expect(buttonList).toHaveLength(2)
  })

  test("email field should be with @ ", () => {
    render (<Form/>);
    const emailField = screen.getByPlaceholderText('Email');
    userEvent.type(emailField, "anton")
    expect(emailField.value).not.toMatch("anton@test.com")
  })

  test("phone input should be tel", () => {
    render (<Form/>);
    const phoneField = screen.getByPlaceholderText('Mobile Number');
    expect(phoneField).toHaveAttribute("type", "tel");
  })

  test("should be able to reset the form", () => {
    render (<Form/>);
    const resetBtn = screen.getByTestId("reset-button");
    const nameField = screen.getByPlaceholderText('Name');
    const emailField = screen.getByPlaceholderText('Email');
    const phoneField = screen.getByPlaceholderText('Mobile Number');

    userEvent.type(nameField, "anton")
    userEvent.type(emailField, "test")
    userEvent.type(phoneField, "123")

    fireEvent.click(resetBtn);

    expect(nameField.value).toMatch("")
    expect(emailField.value).toMatch("")
    expect(phoneField.value).toMatch("")
  })

  test("should be able to submit the form", () => {
    render (<Form/>);
    const submitBtn = screen.getByTestId("submit");
    const nameField = screen.getByPlaceholderText('Name');
    const emailField = screen.getByPlaceholderText('Email');
    const phoneField = screen.getByPlaceholderText('Mobile Number');

    // userEvent.type(nameField, "anton");
    fireEvent.change(nameField, {target: {value: 'anton'}})
    fireEvent.change(emailField, {target: {value: 'anton@test.com'}})
    fireEvent.change(phoneField, {target: {value: 'anton'}})

    fireEvent.click(submitBtn);

    expect(screen.getByText('User created successfully')).toBeInTheDocument();
  })
})