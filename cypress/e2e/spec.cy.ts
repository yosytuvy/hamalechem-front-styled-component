describe("template spec", () => {
    it("check general routing on the donations page", () => {
        cy.visit("http://localhost:5173/donations");

        cy.contains("Welcome");

        // open side navigator
        cy.get(".sc-bYMqJM").click();

        cy.get(".sc-iAEbko").type("test input");
        cy.get(".sc-iAEbko").should("have.value", "test input");

        // close side navigator
        cy.get(".sc-bYMqJM").click();

        // route to donation details page
        cy.contains("Blankets").click();

        cy.url().should("include", "/donations/");
        cy.contains("Blankets");

        cy.contains("Hamalechem").click();
        cy.contains("Welcome");
    });
});
