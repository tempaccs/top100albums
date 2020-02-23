describe("tests", function() {
  it("happy path", () => {
    cy.visit("/");
    cy.findByText("MAP OF THE SOUL : 7 - BTS").should("exist");
    cy.findByPlaceholderText("Search ...").type("Linkin Park");
    cy.findByText("MAP OF THE SOUL : 7 - BTS").should("not.exist");
    cy.findByText("Hybrid Theory - LINKIN PARK").should("exist");
    cy.findByText("Hybrid Theory - LINKIN PARK").click();
    cy.findByText("Hybrid Theory").should("exist");
    cy.findByText("LINKIN PARK").should("exist");
    cy.findByText("buy for $4.99").should("exist");
    cy.contains(
      "Hybrid Theory is the debut studio album by American rock band Linkin Park"
    );
  });
});
