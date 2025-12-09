import request from "supertest";
import express from "express";
import peminjamanRoutes from "../routes/peminjamanRoutes.js";
import dotenv from "dotenv";
import { errorHandler } from "../middlewares/errorHandler.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/peminjaman", peminjamanRoutes);

app.use(errorHandler);

describe("Intergration Test Peminjaman Routes", () => {
  test("POST /api/peminjaman - Berhasil Membuat Peminjaman", async () => {
    const res = await request(app).post("/api/peminjaman").send({
      id_buku: "1",
      id_anggota: "1",
      id_petugas: "1",
    });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id_peminjaman");
    expect(res.body).toHaveProperty("tanggal_peminjaman");
  });

  test("GET /api/peminjaman - Mengambil Semua Data Peminjaman", async () => {
    const res = await request(app).get("/api/peminjaman");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty("id_peminjaman");
  });

  test("GET /api/peminjaman/2 - Mengambil Data Peminjaman dengan ID 2", async () => {
    const res = await request(app).get("/api/peminjaman/2");

    expect(res.status).toBe(200);
    expect(typeof res.body).toBe("object");
    expect(res.body).toHaveProperty("id_peminjaman");
    expect(res.body).toHaveProperty("tanggal_peminjaman");
  });

  test("DELETE /api/peminjaman/3 - Menghapus Data peminjaman dengan ID 3", async () => {
    const res = await request(app).delete("/api/peminjaman/3");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("data");
    expect(res.body.data).toHaveProperty("id_peminjaman");
  });
});