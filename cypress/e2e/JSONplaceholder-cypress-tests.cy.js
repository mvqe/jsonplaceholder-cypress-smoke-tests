describe("JSONPlaceholder API Smoke Tests", () => {
  it("List all posts", () => {
    cy.api("GET", "/posts").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("array");
      expect(response.body).to.have.length.above(0);
    });
  });

  it("Returns a specific post", () => {
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

  it("Comments on a specific post.", () => {
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

  it("List all comments", () => {
    cy.api("GET", "/comments").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("array");
      expect(response.body).to.have.length.above(1);
      expect(response.body[0]).to.have.property("postId");
    });
  });

  it("Returns a specific comment", () => {
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

  it("List all albums", () => {
    cy.api("GET", "/albums/").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("array");
      expect(response.body).to.have.length.above(1);
      expect(response.body[0]).to.have.property("userId");
      expect(response.body[0]).to.have.property("id");
      expect(response.body[0]).to.have.property("title");
    });
  });

  it("Returns a specific album", () => {
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

  it("Photos from a specific album", () => {
    cy.api("GET", "/albums/1/photos").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("array");
      expect(response.body).to.have.length.above(1);
      expect(response.body[0]).to.have.property("albumId");
      expect(response.body[0]).to.have.property("id");
      expect(response.body[0]).to.have.property("title");
      expect(response.body[0]).to.have.property("url");
      expect(response.body[0]).to.have.property("thumbnailUrl");
    });
  });

  it("List all photos", () => {
    cy.api("GET", "/photos").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("array");
      expect(response.body).to.have.length.above(1);
      expect(response.body[0]).to.have.property("albumId");
      expect(response.body[0]).to.have.property("id");
      expect(response.body[0]).to.have.property("title");
      expect(response.body[0]).to.have.property("url");
      expect(response.body[0]).to.have.property("thumbnailUrl");
    });
  });

  it("Returns a specific photo", () => {
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

  it("List all todos", () => {
    cy.api("GET", "/todos").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("array");
      expect(response.body).to.have.length.above(1);
      expect(response.body[0]).to.have.property("userId");
      expect(response.body[0]).to.have.property("id");
      expect(response.body[0]).to.have.property("title");
      expect(response.body[0]).to.have.property("completed");
    });
  });

  it("Returns a specific todo", () => {
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

  it("List all users", () => {
    cy.api("GET", "/users").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("array");
      expect(response.body).to.have.length.above(0);
    });
  });

  it("Returns a specific user", () => {
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
  it("Posts from a specific user", () => {
    cy.api("GET", "/users/1/posts").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body[0]).to.have.property("userId");
      expect(response.body[0]).to.have.property("id");
      expect(response.body[0]).to.have.property("title");
      expect(response.body[0]).to.have.property("body");
    });
  });
  it("Todos from a specific user", () => {
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
  it("Albums from a specific user", () => {
    cy.api("GET", "/users/1/albums").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.be.an("array");
      expect(response.body[0]).to.have.property("userId");
      expect(response.body[0]).to.have.property("id");
      expect(response.body[0]).to.have.property("title");
    });
  });

  //QUICK POST METHOD VERIFICATION
  it("Creates a post", () => {
    cy.api({
      method: "POST",
      url: "/posts/",
      body: {
        title: "POST method smoke test",
        body: "testing",
        userId: 1,
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.null;
      expect(response.body).to.be.an("object");
      expect(response.body).to.have.property("id");
    });
  });

  //QUICK SIMULATED DELETE METHOD VERIFICATION
  it("Deletes a post", () => {
    cy.api("DELETE", "/posts/1").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.be.empty;
    });
  });
});
