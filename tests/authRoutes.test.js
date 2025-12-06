import request from "supertest";
import express from "express";
import authRoutes from "../routes/authRoutes.js";
import dotenv from "dotenv";
import { errorHandler } from "../middlewares/errorHandler.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);

app.use(errorHandler);

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
    // pertama login untuk dapat token
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
