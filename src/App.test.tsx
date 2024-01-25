import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
    test("general test on App component", async () => {
        render(<App />);
        const linkElement = await screen.findAllByText(/Hamalechem/i);
        expect(linkElement[0]).toBeInTheDocument();
    });
});
