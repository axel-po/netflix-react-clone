import { render, screen, waitForElementToBeRemoved } from "../../test/test-utils";
import useEvent from "@testing-library/user-event";
import Login from "../Login/Login";

test("Page Login", async () => {
  const connexion = "S'identifier";
  const register = "Inscri";

  render(<Login></Login>);
  expect(screen.getByRole("heading", { name: connexion })).toBeInTheDocument();
});
