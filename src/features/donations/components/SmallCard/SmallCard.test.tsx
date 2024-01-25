import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import OneCard from "./SmallCard";

describe("OneCard", () => {
    const sampleProduct = {
        _id: "1",
        name: "Food Donation",
        category: "Food",
        image: "food.jpg",
        location: "New York",
        publisherId: "123",
        phone: "555-1234",
        details: "Canned goods and produce",
        flexible: true,
    };

    it("renders without crashing", () => {
        render(
            <MemoryRouter>
                <OneCard />
            </MemoryRouter>
        );
    });

    it("renders null if no product prop", () => {
        const { container } = render(
            <MemoryRouter>
                <OneCard />
            </MemoryRouter>
        );
        expect(container).toBeEmptyDOMElement();
    });

    it("renders product image", () => {
        render(
            <MemoryRouter>
                <OneCard product={sampleProduct} />
            </MemoryRouter>
        );
        expect(screen.getByAltText(sampleProduct.name)).toHaveAttribute(
            "src",
            sampleProduct.image
        );
    });

    it("renders product title", () => {
        render(
            <MemoryRouter>
                <OneCard product={sampleProduct} />
            </MemoryRouter>
        );
        expect(screen.getByText(sampleProduct.name)).toBeInTheDocument();
    });

    it("renders product details", () => {
        render(
            <MemoryRouter>
                <OneCard product={sampleProduct} />
            </MemoryRouter>
        );
        expect(screen.getByText(sampleProduct.details)).toBeInTheDocument();
    });
});
