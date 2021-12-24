import request from "supertest";
import { app } from "../../app";

it("return a 201 on successful signup", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "shafei@shafei.com",
      password: "m1o2h319000",
    })
    .expect(201);
});

it("returns a 400 with an invalid email", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "shafeishafei.com",
      password: "m1o2h319000",
    })
    .expect(400);
});

it("returns a 400 with an invalid password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "shafei@shafei.com",
      password: "12",
    })
    .expect(400);
});

it("returns a 400 with missing email or password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      password: "657676",
    })
    .expect(400);

  await request(app)
    .post("/api/users/signup")
    .send({
      email: "shafei@shafei.com",
    })
    .expect(400);
});

it("returns a 400 with duplicated emails", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "shafei@shafei.com",
      password: "m1o2h319000",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signup")
    .send({
      email: "shafei@shafei.com",
      password: "987678",
    })
    .expect(400);
});

it("sets a cookie after successful signup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "shafei@shafei.com",
      password: "m1o2h319000",
    })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});
