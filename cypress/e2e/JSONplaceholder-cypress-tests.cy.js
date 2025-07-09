describe("JSONPlaceholder Smoke Tests", () => {
  // Verificação rápida dos response codes, tempo de resposta e da estrutura das respostas dos endpoints do JSONplaceholder
  const baseUrl = "https://jsonplaceholder.typicode.com";

  it("Lista de posts", () => {
    cy.api("GET", `${baseUrl}/posts`).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("array");
      expect(response.body).to.have.length.above(0);
    });
  });

  it("Detalhe de um post específico.", () => {
    cy.api("GET", `${baseUrl}/posts/1`).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("object");
      expect(response.body).to.have.property("userId");
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("title");
      expect(response.body).to.have.property("body");
    });
  });

  it("Lista de Usuários", () => {
    cy.api("GET", `${baseUrl}/users`).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("array");
      expect(response.body).to.have.length.above(0);
    });
  });

  it("Detalhe de um usuário.", () => {
    cy.api("GET", `${baseUrl}/users/1`).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("name");
      expect(response.body).to.have.property("username");
      expect(response.body).to.have.property("email");
      expect(response.body).to.have.property("address");
      expect(response.body).to.have.property("phone");
      expect(response.body).to.have.property("website");
      expect(response.body).to.have.property("company");
    });
  });

  it("Valida que os comentários estão disponíveis.", () => {
    cy.api("GET", `${baseUrl}/comments`).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("array");
      expect(response.body).to.have.length.above(1);
      expect(response.body[250]).to.have.property("postId");
    });
  });
});
