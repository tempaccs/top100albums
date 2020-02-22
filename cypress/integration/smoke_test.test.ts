describe("Smoke test", function() {
  it("App should render both pages", function() {
    cy.visit("/");
    cy.findByText("AlbumList").should("exist");

    cy.findByText("Detail").click();

    cy.findByText("AlbumDetail").should("exist");
  });
});
