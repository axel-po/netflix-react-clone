import * as React from "react";
import { render, screen, waitForElementToBeRemoved } from "../../test/test-utils";
import Login from "../../components/Login/Login";

test("Composant Login", async () => {
  const connexion = "S'identifier";
  const register = "Inscription";

  render(<Login></Login>);

//   expect(screen.getByRole("heading", { name: connexion })).toBeInTheDocument();
});
