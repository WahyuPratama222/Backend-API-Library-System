import request from "supertest";
import app from "../app.js";

describe("Intergration Test Petugas Routes", () => {
  test("POST /api/petugas - Berhasil Membuat Petugas", async () => {
    const res = await request(app).post("/api/petugas").send({
      nama_petugas: "Serina",
      username: "SerinSukaKamu",
      password: "Bahlilul124",
      role: "Petugas",
    });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("nama_petugas");
    expect(res.body).toHaveProperty("username");
  });

  test("GET /api/petugas - Mengambil Semua Data Petugas", async () => {
    const res = await request(app).get("/api/petugas");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty("nama_petugas");
  });

  test("GET /api/petugas/2 - Mengambil Data Petugas dengan ID 2", async () => {
    const res = await request(app).get("/api/petugas/2");

    expect(res.status).toBe(200);
    expect(typeof res.body).toBe("object");
    expect(res.body).toHaveProperty("id_petugas");
    expect(res.body).toHaveProperty("nama_petugas");
  });

  test("PUT /api/petugas/2 - Merubah Semua Data Petugas dengan ID 2", async () => {
    const res = await request(app).put("/api/petugas/2").send({
      nama_petugas: "Merisa",
      username: "Merisakan",
      password: "mmerisssa123",
      role: "Petugas",
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id_petugas");
    expect(res.body).toHaveProperty("nama_petugas");
  });

  test("PATCH /api/petugas/2 - Merubah Sebagian Data Petugas dengan ID 2", async () => {
    const res = await request(app).patch("/api/petugas/2").send({
      nama_petugas: "MayKisah",
      username: "mykisah",
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("nama_petugas");
    expect(res.body).toHaveProperty("username");
  });

  test("DELETE /api/petugas/3 - Menghapus Data Petugas dengan ID 3", async () => {
    const res = await request(app).delete("/api/petugas/3");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("data");
    expect(res.body.data).toHaveProperty("nama_petugas");
  });
});
