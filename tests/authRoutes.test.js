import request from "supertest";
import app from "../app.js";

describe("Integration Test Auth Routes", () => {
  test("POST /api/auth/login - Berhasil Login", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ username: "MulyadiKeceeee", password: "password123" });

    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("token");
    expect(res.body.user).toHaveProperty("id_petugas");
  });

  test("POST /api/auth/login - Gagal Login (Salah Password)", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ username: "MulyadiKeceeee", password: "salah" });

    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty("status");
  });

  test("GET /api/auth/me - Testing Token", async () => {
    const login = await request(app)
      .post("/api/auth/login")
      .send({ username: "MulyadiKeceeee", password: "password123" });

    const token = login.body.token;

    const res = await request(app)
      .get("/api/auth/me")
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message");
    expect(res.body.user).toHaveProperty("role");
  });
});
