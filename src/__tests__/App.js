import { render, waitForElementToBeRemoved, screen } from "../test/test-utils";
import App from "../App";

test("rendu de l'app avec page de login", async () => {
  const connexion = "S'identifier";
  const register = "Inscription";

  render(<App></App>);
  expect(screen.getByRole("heading", { name: connexion })).toBeInTheDocument();
});
