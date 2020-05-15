import React from "react";
import { render, fireEvent } from "@testing-library/react";
// import user from "@testing-library/user-event";
import App from "./App";

// const setup = () => {
//   const app = render(<App />);
//   const { getByTestId, getByRole, findByTestId } = render(<App />);
// };

test("renders App without crashing", () => {
  render(<App />);
});
test("submits form successfully", async () => {
  const { getByTestId, getByRole, findByTestId } = render(<App />);

  const firstName = getByTestId("firstName");
  const lastName = getByTestId("lastName");
  const email = getByTestId("email");
  const message = getByTestId("message");
  const submitBtn = getByRole("button", { name: /submit/i });

  fireEvent.change(firstName, { target: { value: "Ryan" } });
  expect(firstName.value).toBe("Ryan");

  fireEvent.change(lastName, { target: { value: "Paulson" } });
  expect(lastName.value).toBe("Paulson");

  fireEvent.change(email, { target: { value: "email@email.com" } });
  expect(email.value).toBe("email@email.com");

  fireEvent.change(message, { target: { value: "message" } });
  expect(message.value).toBe("message");

  fireEvent.click(submitBtn);

  await expect((await findByTestId("preTag")).textContent).toContain("email@email.com");
});
