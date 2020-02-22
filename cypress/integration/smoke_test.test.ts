describe("Smoke test", function() {
  it("App should render", function() {
    cy.visit("/");
    cy.findByText(/learn react/i).should("exist");
  });
});
