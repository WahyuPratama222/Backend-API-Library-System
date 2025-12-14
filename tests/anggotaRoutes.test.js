import request from "supertest";
import app from "../app.js";

describe("Intergration Test Anggota Routes", () => {
  test("POST /api/anggota - Berhasil Membuat Anggota", async () => {
    const res = await request(app).post("/api/anggota").send({
      nama_anggota: "Prabowo Subianto",
      jenis_kelamin: "Laki-laki",
      alamat: "Jl. Bandungan",
      no_telp: "08219119192",
      email: "prbwaosbt@gmail.com",
    });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("nama_anggota");
    expect(res.body).toHaveProperty("status_anggota");
  });

  test("GET /api/anggota - Mengambil Semua Data Anggota", async () => {
    const res = await request(app).get("/api/anggota");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty("nama_anggota");
  });

  test("GET /api/anggota/2 - Mengambil Data Anggota dengan ID 2", async () => {
    const res = await request(app).get("/api/anggota/2");

    expect(res.status).toBe(200);
    expect(typeof res.body).toBe("object");
    expect(res.body).toHaveProperty("id_anggota");
    expect(res.body).toHaveProperty("nama_anggota");
  });

  test("PUT /api/anggota/2 - Merubah Semua Data Anggota dengan ID 2", async () => {
    const res = await request(app).put("/api/anggota/2").send({
      nama_anggota: "Tristan",
      jenis_kelamin: "Laki-laki",
      alamat: "Jl Musi Rawas",
      no_telp: "082421241",
      email: "trissada@gmail.com",
      status_anggota: "Aktif",
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id_anggota");
    expect(res.body).toHaveProperty("nama_anggota");
  });

  test("PATCH /api/anggota/2 - Merubah Sebagian Data Anggota dengan ID 2", async () => {
    const res = await request(app).patch("/api/anggota/2").send({
      nama_anggota: "Rahayu Maesa",
      jenis_kelamin: "Perempuan",
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("nama_anggota");
    expect(res.body).toHaveProperty("jenis_kelamin");
  });

  test("DELETE /api/anggota/3 - Menghapus Data Anggota dengan ID 3", async () => {
    const res = await request(app).delete("/api/anggota/3");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("data");
    expect(res.body.data).toHaveProperty("nama_anggota");
  });
});
