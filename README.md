
<div align="center">
  <h1>📚 Library Management System API</h1>

  <p>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
    <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" />
    <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />
    <img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white" />
    <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" />
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
    <img src="https://img.shields.io/badge/Bcrypt-003A8F?style=for-the-badge&logo=letsencrypt&logoColor=white" />
    <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" />
  </p>

  <p>
    <strong>RESTful API untuk sistem manajemen perpustakaan</strong><br />
    Modern • Aman • Terstruktur
  </p>

  <p>
    <img src="https://img.shields.io/badge/Status-Active-success" />
  </p>
</div>

---

## 🌟 Gambaran Umum

> Backend service terstruktur untuk mengelola sistem perpustakaan modern, dengan fokus pada **keamanan**, **konsistensi data**, dan **best practice REST API**.

Library Management System API adalah backend service yang menyediakan fitur pengelolaan data perpustakaan, mulai dari data buku, anggota, petugas, hingga transaksi peminjaman dan pengembalian buku.

Aplikasi ini dirancang dengan pendekatan **RESTful API**, menerapkan **best practice Express**, serta memperhatikan aspek **keamanan, konsistensi data, dan skalabilitas**.

---

## ✨ Fitur Utama

---

### 🚀 Kenapa Project Ini? 
- Cocok untuk **tugas kuliah**, **portofolio backend**, dan **latihan sistem skala menengah**
- Menerapkan **transaction & locking** seperti sistem nyata
- Struktur kode siap dikembangkan lebih lanjut

---

### 🔹 Fungsionalitas Inti
- 📖 Manajemen Buku (CRUD)
- 👥 Manajemen Anggota
- 👮 Manajemen Petugas (Admin / Petugas)
- 📤 Transaksi Peminjaman Buku (stok otomatis berkurang)
- 📥 Transaksi Pengembalian Buku (stok otomatis bertambah)
- 🔐 Autentikasi & Autorisasi menggunakan JWT

### 🔹 Sorotan Teknis
- 🎯 Database Transaction (ACID)
- 🔒 Row-Level Locking (Pessimistic Locking)
- ✅ Validasi input di setiap endpoint
- 🧪 Integration Testing dengan Jest & Supertest
- 📝 Dokumentasi API menggunakan Swagger

---

## 📋 Daftar Isi
1. Prasyarat
2. Instalasi
3. Setup Database
4. Konfigurasi Environment
5. Menjalankan Aplikasi
6. Struktur Proyek
7. API Endpoints
8. Testing
9. Arsitektur & Keamanan

---

## 🔧 1. Prasyarat

Pastikan environment pengembangan telah memenuhi kebutuhan berikut:
- Node.js >= 18
- MySQL >= 8.0
- npm >= 6

---

## 📦 2. Instalasi

Clone repository dan install seluruh dependency:

```bash
git clone https://github.com/WahyuPratama222/Backend-Perpustakaan.git
cd Backend-Perpustakaan
npm install
```

---

## 🗄️ 3. Setup Database

Project ini menggunakan **Sequelize CLI** untuk mengelola database.

### 🔹 Setup Otomatis

```bash
npm run db:reset
```

Perintah ini akan:
- Drop database
- Create database
- Menjalankan migration
- Menjalankan seeder

### 🔹 Setup Manual

```bash
npm run db:create
npm run db:migrate
npm run db:seed
```

---

## ⚙️ 4. Konfigurasi Environment

Buat file `.env` di root project:

```env
# Server
SERVER_PORT=5000
CLIENT_URL=http://localhost:3000

# Database
DB_NAME=perpus
DB_USER=root
DB_PASSWORD=password_mysql_anda
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DIALECT=mysql

# JWT
JWT_SECRET=secret_jwt_anda
```

---

## 🚀 5. Menjalankan Aplikasi

### Mode Development
```bash
npm run dev
```

### Mode Production
```bash
npm start
```

### Swagger API
```
http://localhost:5000/api-docs
```

---

## 📁 6. Struktur Proyek

```text
Backend-Perpustakaan/
├── app.js           # Konfigurasi Express (middleware, routes)
├── server.js        # Entry point server
├── config/          # Konfigurasi database & swagger
├── controllers/     # Handler request & response
├── middlewares/     # Auth middleware, error handler
├── migrations/      # Migrasi database
├── models/          # Sequelize models
├── routes/          # Endpoint API
├── seeders/         # Data dummy
├── services/        # Business logic
├── tests/           # Integration testing
├── utils/           # Helper functions
├── validations/     # Validasi input
└── package.json
```

---

## 🔌 7. API Endpoints

> Seluruh endpoint mengikuti prinsip **RESTful API** dan menggunakan format response JSON.
> Endpoint tertentu dilindungi oleh middleware autentikasi JWT.

### 🔐 Autentikasi (JWT)

Autentikasi **tidak diterapkan secara global** di seluruh endpoint.
Sistem JWT hanya digunakan pada **flow autentikasi user**, yaitu:

1. User melakukan login manual melalui endpoint login
2. Server mengembalikan **JWT token**
3. Token digunakan untuk mengakses endpoint `/me`

> Endpoint lain **tidak otomatis dilindungi JWT**, dan dapat disesuaikan kembali sesuai kebutuhan pengembangan.

| Method | Endpoint | Deskripsi |
|------|---------|----------|
| POST | `/api/auth/login` | Login user & generate JWT |
| GET | `/api/auth/me` | Validasi token & ambil data user |

📌 Gunakan header:
```
Authorization: Bearer <token>
```

---

### 📖 Data Master

`{resource}` dapat berupa:
- buku
- anggota
- petugas

| Method | Endpoint | Deskripsi |
|------|---------|----------|
| GET | `/api/{resource}` | Ambil semua data |
| GET | `/api/{resource}/{id}` | Ambil data berdasarkan ID |
| POST | `/api/{resource}` | Tambah data baru |
| PUT | `/api/{resource}/{id}` | Update seluruh data |
| PATCH | `/api/{resource}/{id}` | Update sebagian data |
| DELETE | `/api/{resource}/{id}` | Hapus data |

---

### 📤 Peminjaman Buku

| Method | Endpoint | Deskripsi |
|------|---------|----------|
| POST | `/api/peminjaman` | Membuat transaksi peminjaman |
| GET | `/api/peminjaman` | Ambil semua data peminjaman |
| GET | `/api/peminjaman/{id}` | Ambil data berdasarkan ID |
| DELETE | `/api/peminjaman/{id}` | Hapus data peminjaman |

---

### 📥 Pengembalian Buku

| Method | Endpoint | Deskripsi |
|------|---------|----------|
| POST | `/api/pengembalian` | Proses pengembalian buku |
| GET | `/api/pengembalian` | Ambil semua data pengembalian |
| GET | `/api/pengembalian/{id}` | Ambil data berdasarkan ID |
| DELETE | `/api/pengembalian/{id}` | Hapus data pengembalian |

---

## 🧪 8. Testing

Pastikan database sudah siap sebelum menjalankan test:

```bash
npm run db:create
npm run db:migrate
npm run db:seed
```

Jalankan seluruh integration test:
```bash
npm test
```
---

## ⚠️ Keterbatasan & Rencana Pengembangan

Bagian ini mencatat kekurangan sistem secara sadar serta arah peningkatan yang realistis ke depan.

### ❌ Keterbatasan Saat Ini

1. **Access Management Admin dan Petugas belum dibedakan**  
   Saat ini hak akses Admin dan Petugas masih berada pada level yang sama. Belum ada pembatasan granular terkait aksi tertentu (misalnya penghapusan data master atau manajemen user).

2. **Masih terdapat redundansi kode**  
   Beberapa logic memiliki pola yang serupa dan berpotensi direfaktor menjadi utilitas atau abstraction layer agar lebih DRY dan mudah dirawat.

3. **Inkonsistensi penggunaan module system (ESM vs CommonJS)**  
   Express dan Sequelize runtime menggunakan ES Module (ESM), sedangkan Sequelize CLI masih bergantung pada CommonJS (CJS) untuk migrasi dan seeding. Hal ini menambah kompleksitas konfigurasi karena CJS belum sepenuhnya mendukung ESM secara native.

4. **Belum menggunakan TypeScript**  
   Seluruh kode masih menggunakan JavaScript sehingga belum memiliki perlindungan tipe data secara statis, yang berisiko menimbulkan bug pada skala pengembangan lebih besar.

### 🚧 Rencana Pengembangan Selanjutnya

- Implementasi **Role-Based Access Control (RBAC)** untuk membedakan hak akses Admin dan Petugas
- Refactoring kode untuk mengurangi duplikasi dan meningkatkan maintainability
- Menyelaraskan ekosistem Sequelize (runtime & CLI) atau migrasi ke pendekatan tooling yang lebih konsisten
- Migrasi ke **TypeScript** untuk meningkatkan keamanan tipe data, keterbacaan, dan skalabilitas kode

---

---

## 🏗️ 9. Arsitektur & Keamanan

```text
Client
  │
  ▼
Router
  │
Middleware (Auth – opsional per route)
  │
Controller
  │
Service (Business Logic)
  │
Validation (Request Schema)
  │
Model (Sequelize ORM)
  │
Database (MySQL)
```

- Separation of Concerns (Controller, Service, Validation, Model)
- Transaction Management untuk proses kritikal
- Row-Level Locking untuk mencegah race condition
- Middleware untuk autentikasi & validasi

---

## 👨‍💻 Penulis

**Wahyu Pratama**  
GitHub: https://github.com/WahyuPratama222

---

⭐ Jika project ini bermanfaat, jangan lupa beri bintang ⭐


