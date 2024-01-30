// import { render, screen } from "@testing-library/react";
// import CardImage from "./CardImage";

// describe("CardImage", () => {
//     test("renders image with correct src and alt", () => {
//         render(<CardImage imageSrc="image.jpg" imageAlt={""} />);
//         const image = screen.getByRole("img");
//         expect(image).toHaveAttribute("src", "image.jpg");
//     });

//     test("renders image with correct alt text", () => {
//         render(<CardImage imageAlt="Test image" />);
//         const image = screen.getByAltText("Test image");
//         expect(image).toBeInTheDocument();
//     });

//     test("renders image with default src when none provided", () => {
//         render(<CardImage />);
//         const image = screen.getByRole("img");
//         expect(image).toHaveAttribute("src", "");
//     });

//     test("renders image with default alt text when none provided", () => {
//         render(<CardImage />);
//         const image = screen.getByAltText("");
//         expect(image).toBeInTheDocument();
//     });
// });
