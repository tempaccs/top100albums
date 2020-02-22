describe("Smoke test", function() {
  it("App should render", function() {
    cy.visit("http://app:80");
    cy.findByText(/learn react/i).should("exist");
  });
});
