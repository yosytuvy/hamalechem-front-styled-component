import { render, screen } from "@testing-library/react";
import App from "./App";
describe("App", () => {
    test("general test on App component", () => {
        render(<App />);
        const linkElement = screen.getByText(/Hemalechem/i);
        expect(linkElement).toBeInTheDocument();
    });
});
