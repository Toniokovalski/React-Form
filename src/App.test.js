import * as React from 'react'
import {render, screen, getDefaultNormalizer} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Form from './components/Form';

test("test main header", () => {
  render(<Form />);
  expect(screen.getByText(/This is testing project/i)).toBeInTheDocument();
})

test("should render the basic labels",  () => {
  render(<Form />);
  const name = screen.getByLabelText("Name:", {normalizer: getDefaultNormalizer({trim: false})})
  const email = screen.getByLabelText("Email:", {normalizer: getDefaultNormalizer({trim: false})})
  const mobile = screen.getByLabelText("Mobile Number:", {normalizer: getDefaultNormalizer({trim: false})})

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(mobile).toBeInTheDocument();
});