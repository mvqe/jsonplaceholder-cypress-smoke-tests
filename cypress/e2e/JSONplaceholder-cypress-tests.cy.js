describe("JSONPlaceholder Smoke Tests", () => {
  it("Lista todos os posts", () => {
    cy.api("GET", "/posts").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("array");
      expect(response.body).to.have.length.above(0);
    });
  });

  it("Retorna um post específico", () => {
    cy.api("GET", "/posts/1").then((response) => {
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

  it("Comentários de um post específico.", () => {
    cy.api("GET", "/posts/1/comments").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("array");
      expect(response.body[0]).to.have.property("postId");
      expect(response.body[0]).to.have.property("id");
      expect(response.body[0]).to.have.property("name");
      expect(response.body[0]).to.have.property("body");
    });
  });

  it("Lista todos os comentários", () => {
    cy.api("GET", "/comments").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("array");
      expect(response.body).to.have.length.above(1);
      expect(response.body[250]).to.have.property("postId");
    });
  });

  it("Retorna um comentário específico", () => {
    cy.api("GET", "/comments/1").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("object");
      expect(response.body).to.have.property("postId");
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("name");
      expect(response.body).to.have.property("email");
      expect(response.body).to.have.property("body");
    });
  });

  it("Lista todos os álbuns", () => {
    cy.api("GET", "/albums/").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("array");
      expect(response.body).to.have.length.above(1);
      expect(response.body[50]).to.have.property("userId");
      expect(response.body[50]).to.have.property("id");
      expect(response.body[50]).to.have.property("title");
    });
  });

  it("Retorna um álbum específico", () => {
    cy.api("GET", "/albums/1").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("object");
      expect(response.body).to.have.property("userId");
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("title");
    });
  });

  it("Fotos de um álbum específico", () => {
    cy.api("GET", "/albums/1/photos").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("array");
      expect(response.body).to.have.length.above(1);
      expect(response.body[40]).to.have.property("albumId");
      expect(response.body[40]).to.have.property("id");
      expect(response.body[40]).to.have.property("title");
      expect(response.body[40]).to.have.property("url");
      expect(response.body[40]).to.have.property("thumbnailUrl");
    });
  });

  it("Lista todas as fotos", () => {
    cy.api("GET", "/photos").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("array");
      expect(response.body).to.have.length.above(1);
      expect(response.body[40]).to.have.property("albumId");
      expect(response.body[40]).to.have.property("id");
      expect(response.body[40]).to.have.property("title");
      expect(response.body[40]).to.have.property("url");
      expect(response.body[40]).to.have.property("thumbnailUrl");
    });
  });

  it("Retorna uma foto específica", () => {
    cy.api("GET", "/photos/1").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("object");
      expect(response.body).to.have.property("albumId");
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("title");
      expect(response.body).to.have.property("url");
      expect(response.body).to.have.property("thumbnailUrl");
    });
  });

  it("Lista todas as tarefas", () => {
    cy.api("GET", "/todos").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("array");
      expect(response.body).to.have.length.above(1);
      expect(response.body[50]).to.have.property("userId");
      expect(response.body[0]).to.have.property("id");
      expect(response.body[0]).to.have.property("title");
      expect(response.body[0]).to.have.property("completed");
    });
  });

  it("Retorna uma tarefa específica", () => {
    cy.api("GET", "/todos/1").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("object");
      expect(response.body).to.have.property("userId");
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("title");
      expect(response.body).to.have.property("completed");
    });
  });

  it("Lista todos os usuários", () => {
    cy.api("GET", "/users").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("array");
      expect(response.body).to.have.length.above(0);
    });
  });

  it("Retorna um usuário específico", () => {
    cy.api("GET", "/users/1").then((response) => {
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
  it("Posts de um usuário específico", () => {
    cy.api("GET", "/users/1/posts").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body[0]).to.have.property("userId");
      expect(response.body[0]).to.have.property("id");
      expect(response.body[0]).to.have.property("title");
      expect(response.body[0]).to.have.property("body");
    });
  });
  it("Tarefas de um usuário específico", () => {
    cy.api("GET", "/users/1/todos").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.be.an("array");
      expect(response.body[0]).to.have.property("userId");
      expect(response.body[0]).to.have.property("id");
      expect(response.body[0]).to.have.property("title");
      expect(response.body[0]).to.have.property("completed");
    });
  });
  it("Álbuns de um usuário específico", () => {
    cy.api("GET", "/users/1/albums").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.be.an("array");
      expect(response.body[0]).to.have.property("userId");
      expect(response.body[0]).to.have.property("id");
      expect(response.body[0]).to.have.property("title");
    });
  });
});
