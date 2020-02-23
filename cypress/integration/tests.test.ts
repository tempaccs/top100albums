describe("tests", function() {
  it("App should render both pages", function() {
    cy.visit("/");
    cy.findByText("MAP OF THE SOUL : 7 - BTS").should("exist");
  });

  it("should be searchable", () => {
    cy.findByText("MAP OF THE SOUL : 7 - BTS").should("exist");
    cy.findByPlaceholderText("Search ...").type("Linkin Park");
    cy.findByText("MAP OF THE SOUL : 7 - BTS").should("not.exist");
    cy.findByText("Hybrid Theory - LINKIN PARK").should("exist");
  });
});
