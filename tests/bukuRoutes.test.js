import request from "supertest";
import app from "../app.js";

describe("Intergration Test Buku Routes", () => {
  test("POST /api/buku - Berhasil Membuat Buku", async () => {
    const res = await request(app).post("/api/buku").send({
      judul_buku: "Aroma Karsa",
      nama_penerbit: "Mizan Publishing",
      nama_penulis: "Dee Lestari",
      jumlah_halaman: 800,
      jumlah_buku: 2,
    });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("judul_buku");
    expect(res.body).toHaveProperty("nama_penulis");
  });

  test("GET /api/buku - Mengambil Semua Data Buku", async () => {
    const res = await request(app).get("/api/buku");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty("judul_buku");
  });

  test("GET /api/buku/2 - Mengambil Data Buku dengan ID 2", async () => {
    const res = await request(app).get("/api/buku/2");

    expect(res.status).toBe(200);
    expect(typeof res.body).toBe("object");
    expect(res.body).toHaveProperty("id_buku");
    expect(res.body).toHaveProperty("judul_buku");
  });

  test("PUT /api/buku/2 - Merubah Semua Data Buku dengan ID 2", async () => {
    const res = await request(app).put("/api/buku/2").send({
      judul_buku: "To Live",
      nama_penerbit: "Gramedia",
      nama_penulis: "Yu Hua",
      jumlah_halaman: 243,
      jumlah_buku: 1,
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id_buku");
    expect(res.body).toHaveProperty("judul_buku");
  });

  test("PATCH /api/buku/2 - Merubah Sebagian Data Buku dengan ID 2", async () => {
    const res = await request(app).patch("/api/buku/2").send({
      judul_buku: "Bumi Manusia",
      nama_penulis: "Pramoedya Ananta Toer",
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("judul_buku");
    expect(res.body).toHaveProperty("nama_penulis");
  });

  test("DELETE /api/buku/3 - Menghapus Data Buku dengan ID 3", async () => {
    const res = await request(app).delete("/api/buku/3");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("data");
    expect(res.body.data).toHaveProperty("judul_buku");
  });
});
