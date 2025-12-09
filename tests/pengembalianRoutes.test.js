import request from "supertest";
import express from "express";
import pengembalianRoutes from "../routes/pengembalianRoutes.js";
import dotenv from "dotenv";
import { errorHandler } from "../middlewares/errorHandler.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/pengembalian", pengembalianRoutes);

app.use(errorHandler);

describe("Intergration Test Pengembalian Routes", () => {
  test("POST /api/pengembalian - Berhasil Membuat Pengembalian", async () => {
    const res = await request(app).post("/api/pengembalian").send({
      id_peminjaman: "4",
      id_petugas: "1",
      status_buku: "Bagus",
    });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("status_buku");
    expect(res.body).toHaveProperty("tanggal_pengembalian");
  });

  test("GET /api/pengembalian - Mengambil Semua Data Pengembalian", async () => {
    const res = await request(app).get("/api/pengembalian");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty("id_pengembalian");
  });

  test("GET /api/pengembalian/2 - Mengambil Data Pengembalian dengan ID 1", async () => {
    const res = await request(app).get("/api/pengembalian/1");

    expect(res.status).toBe(200);
    expect(typeof res.body).toBe("object");
    expect(res.body).toHaveProperty("id_pengembalian");
    expect(res.body).toHaveProperty("tanggal_pengembalian");
  });

  test("DELETE /api/pengembalian/2 - Menghapus Data Pengembalian dengan ID 3", async () => {
    const res = await request(app).delete("/api/pengembalian/3");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("data");
    expect(res.body.data).toHaveProperty("id_pengembalian");
  });
});
