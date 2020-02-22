describe("Smoke test", function() {
  it("App should render both pages", function() {
    cy.visit("/");
    cy.findByText("MAP OF THE SOUL : 7 - BTS").should("exist");
  });
});
