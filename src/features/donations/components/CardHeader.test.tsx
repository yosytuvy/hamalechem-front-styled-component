import { render, screen } from "@testing-library/react";
import CardHeader from "./CardHeader";

describe("CardHeader", () => {
    test("renders title", () => {
        render(<CardHeader title="Test Title" />);
        const title = screen.getByText(/Test Title/i);
        expect(title).toBeInTheDocument();
    });

    test("renders default title when none provided", () => {
        render(<CardHeader />);
        const title = screen.getByRole("heading");
        expect(title).toHaveTextContent("");
    });

    test("matches snapshot", () => {
        const { asFragment } = render(<CardHeader title="Test Title" />);
        expect(asFragment()).toMatchSnapshot();
    });
});
