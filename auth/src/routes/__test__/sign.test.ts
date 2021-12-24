import request from "supertest";
import { app } from "../../app";

it("fails when a email that does not exist is supplied", async () => {
  await request(app)
    .post("/api/users/signin")
    .send({
      email: "shafei@shafei.com",
      password: "m1o2h319000",
    })
    .expect(400);
});

it("fails when an incorrect password is supplied", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "shafei@shafei.com",
      password: "m1o2h319000",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({
      email: "shafei@shafei.com",
      password: "123456",
    })
    .expect(400);
});

it("responds with a cookie when given valid credentials", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "shafei@shafei.com",
      password: "m1o2h319000",
    })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signin")
    .send({
      email: "shafei@shafei.com",
      password: "m1o2h319000",
    })
    .expect(200);

  expect(response.get("Set-Cookie")).toBeDefined();
});
