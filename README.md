<div align="center">
  <h1> 📕 Library Management System API </h1>

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
  </p>

  <p>
    <img src="https://img.shields.io/badge/Status-Active-success" />
    <img src="https://img.shields.io/badge/Version-1.0.0-blue" />
  </p>
</div>

---

## 🌟 Gambaran Umum

> Backend service terstruktur untuk mengelola sistem perpustakaan modern, dengan fokus pada **aspek keamanan dasar**, **konsistensi data**, dan **best practice REST API**

Library Management System API adalah backend service yang menyediakan fitur pengelolaan data perpustakaan, mulai dari data buku, anggota, petugas, hingga transaksi peminjaman dan pengembalian buku.

Aplikasi ini dirancang dengan pendekatan **RESTful API**, menerapkan **best practice Express**, serta memperhatikan aspek **keamanan, konsistensi data, dan skalabilitas**.

---

## ✨ Fitur Utama

### 🚀 Kenapa Project Ini? 
- Cocok untuk **tugas kuliah**, **portofolio backend**, dan **latihan sistem skala menengah**
- Menerapkan **transaction & locking** seperti sistem nyata
- Struktur kode siap dikembangkan lebih lanjut
- Dilengkapi **CI/CD pipeline** dengan GitHub Actions
- **Integration testing** lengkap dengan Jest & Supertest

### 🔹 Fungsionalitas Inti
- 📖 **Manajemen Buku** (CRUD lengkap)
- 👥 **Manajemen Anggota** (CRUD lengkap + status aktif/non-aktif)
- 👮 **Manajemen Petugas** (CRUD lengkap + role Admin/Petugas)
- 📤 **Transaksi Peminjaman Buku** (stok otomatis berkurang)
- 📥 **Transaksi Pengembalian Buku** (stok otomatis bertambah + status buku)
- 🔐 **Autentikasi berbasis JWT** (login & identity verification)

### 🔹 Sorotan Teknis
- 🎯 **Database Transaction** (ACID) - Semua operasi kritikal menggunakan transaction
- 🔒 **Row-Level Locking** (Pessimistic Locking) - Mencegah race condition pada stok buku
- ✅ **Validasi Input** di setiap endpoint dengan custom validation utilities
- 🧪 **Integration Testing** dengan Jest & Supertest
- 📝 **Dokumentasi API** menggunakan Swagger/OpenAPI 3.0
- 🔄 **Rollback Mechanism** - Penghapusan pengembalian akan rollback status peminjaman
- 🏗️ **Clean Architecture** - Separation of concerns (Controller → Validation → Service → Model)
- 🛡️ **Authentication & Identity Security** – Bcrypt & JWT
- 🚦 **Error Handling** terpusat dengan custom error classes

---

## 📋 Daftar Isi
1. [Prasyarat](#prasyarat)
2. [Instalasi](#instalasi)
3. [Setup Database](#setup-database)
4. [Konfigurasi Environment](#konfigurasi-environment)
5. [Menjalankan Aplikasi](#menjalankan-aplikasi)
6. [Struktur Proyek](#struktur-proyek)
7. [API Endpoints](#api-endpoints)
8. [Testing](#testing)
9. [Arsitektur & Keamanan](#arsitektur--keamanan)
10. [Fitur Keamanan](#fitur-keamanan)
11. [Business Logic](#business-logic)
12. [Keterbatasan & Rencana Pengembangan](#keterbatasan--rencana-pengembangan)
13. [CI/CD Pipeline](#cicd-pipeline)
14. [Troubleshooting](#troubleshooting)
15. [Penutup](#penutup)

---

## 🔧 1. Prasyarat

Pastikan environment pengembangan telah memenuhi kebutuhan berikut:
- **Node.js** >= 18.x
- **MySQL** >= 8.0
- **npm** >= 6.x
- **Git** (untuk clone repository)

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

### 🔹 Setup Otomatis (Recommended)

```bash
npm run db:reset
```

Perintah ini akan:
1. Drop database (jika ada)
2. Create database baru
3. Menjalankan semua migration
4. Menjalankan semua seeder

### 🔹 Setup Manual

```bash
# Buat database
npm run db:create

# Jalankan migration
npm run db:migrate

# Jalankan seeder (data dummy)
npm run db:seed
```

### 🔹 Perintah Database Lainnya

```bash
# Drop database
npm run db:drop

# Reset database (drop + create + migrate + seed)
npm run db:reset
```

---

## ⚙️ 4. Konfigurasi Environment

Buat file `.env` di root project dengan template berikut:

```env
# Server Configuration
SERVER_PORT=5000
CLIENT_URL=http://localhost:3000

# Database Configuration
DB_NAME=perpus
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DIALECT=mysql

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here
```

> ⚠️ **Penting**: Ganti `DB_PASSWORD` dan `JWT_SECRET` dengan nilai yang aman!

### Penjelasan Environment Variables

| Variable | Deskripsi | Default | Required |
|----------|-----------|---------|----------|
| `SERVER_PORT` | Port server Express | 5000 | No |
| `CLIENT_URL` | URL client untuk CORS | - | Yes |
| `DB_NAME` | Nama database MySQL | perpus | Yes |
| `DB_USER` | Username MySQL | root | Yes |
| `DB_PASSWORD` | Password MySQL | - | Yes |
| `DB_HOST` | Host MySQL | 127.0.0.1 | Yes |
| `DB_PORT` | Port MySQL | 3306 | Yes |
| `DB_DIALECT` | Dialect database | mysql | Yes |
| `JWT_SECRET` | Secret key untuk JWT | - | Yes |

---

## 🚀 5. Menjalankan Aplikasi

### Mode Development (dengan auto-reload)
```bash
npm run dev
```

### Mode Production
```bash
npm start
```

### Akses Swagger Documentation
Setelah server berjalan, buka browser:
```
http://localhost:5000/api-docs
```

### Default User untuk Testing (dari seeder)

| Username | Password | Role |
|----------|----------|------|
| MulyadiKeceeee | password123 | Petugas |
| AniAdmin | admin456 | Petugas |
| BudiPetugas | budi789 | Petugas |
| Renosijgo | reno121 | Admin |

---

## 📁 6. Struktur Proyek

```
backend/
├── .github/
│   └── workflows/
│       └── ci.yml                 # Pipeline CI GitHub Actions
├── config/
│   ├── config.cjs                 # Konfigurasi Sequelize CLI
│   ├── databases.js               # Instance Sequelize untuk runtime
│   └── swagger.js                 # Konfigurasi Swagger/OpenAPI
├── controllers/                   # Layer Controller (handle HTTP request/response)
│   ├── anggotaController.js
│   ├── authController.js
│   ├── bukuController.js
│   ├── getUserController.js       # Controller untuk testing JWT
│   ├── peminjamanController.js
│   ├── pengembalianController.js
│   └── petugasController.js
├── middlewares/                   # Middleware Express
│   ├── authMiddleware.js          # JWT authentication middleware
│   └── errorHandler.js            # Global error handler
├── migrations/                    # Database migrations
│   ├── 1-create-anggota.cjs
│   ├── 2-create-buku.cjs
│   ├── 3-create-petugas.cjs
│   ├── 4-create-peminjaman.cjs
│   └── 5-create-pengembalian.cjs
├── models/                        # Sequelize models
│   ├── Anggota.js
│   ├── Buku.js
│   ├── Peminjaman.js
│   ├── Pengembalian.js
│   ├── Petugas.js
│   └── associations.js            # Model relationships
├── routes/                        # Express routes
│   ├── anggotaRoutes.js
│   ├── authRoutes.js
│   ├── bukuRoutes.js
│   ├── peminjamanRoutes.js
│   ├── pengembalianRoutes.js
│   └── petugasRoutes.js
├── seeders/                       # Database seeders (data dummy)
│   ├── 1-anggota-seeder.cjs
│   ├── 2-buku-seeder.cjs
│   ├── 3-petugas-seeder.cjs
│   ├── 4-peminjaman-seeder.cjs
│   └── 5-pengembalian-seeder.cjs
├── services/                      # Business logic layer
│   ├── anggotaService.js
│   ├── authService.js
│   ├── bukuService.js
│   ├── peminjamanService.js
│   ├── pengembalianService.js
│   └── petugasService.js
├── tests/                         # Integration tests
│   ├── anggotaRoutes.test.js
│   ├── authRoutes.test.js
│   ├── bukuRoutes.test.js
│   ├── peminjamanRoutes.test.js
│   ├── pengembalianRoutes.test.js
│   └── petugasRoutes.test.js
├── utils/                         # Utility functions
│   ├── errors/
│   │   ├── appError.js            # Custom error class
│   │   └── errorsUtil.js          # Error factory functions
│   ├── validateCountUtil.js       # Validate count/integer > 0
│   ├── validateDataUtil.js        # Generic data validators
│   ├── validateEmailUtil.js       # Email format validator
│   └── validateIdUtil.js          # ID validator
├── validations/                   # Validation layer per route (gate sebelum service)
│   ├── anggotaValidation.js
│   ├── authValidation.js
│   ├── bukuValidation.js
│   ├── peminjamanValidation.js
│   ├── pengembalianValidation.js
│   └── petugasValidation.js
├── .env.example                   # Template environment variables
├── .gitignore                     # Git ignore rules
├── .sequelizerc                   # Sequelize CLI configuration
├── app.js                         # Express app configuration
├── jest.config.js                 # Jest configuration
├── package.json                   # NPM dependencies & scripts
├── README.md                      # Project documentation
└── server.js                      # Application entry point
```

### Penjelasan Layer Arsitektur

1. **Routes** → Mendefinisikan endpoint dan HTTP methods
2. **Controllers** → Handle request/response, validasi input awal
3. **Services** → Business logic, transaksi database, validasi lanjutan
4. **Models** → Representasi tabel database (Sequelize ORM)
5. **Validations** → Layer khusus untuk **validasi input per route**
6. **Utils** → Helper functions yang bersifat umum

---

## 🔌 7. API Endpoints

> Seluruh endpoint mengikuti prinsip **RESTful API** dan menggunakan format response JSON.

### 🔐 Autentikasi (JWT)

Autentikasi menggunakan JWT diterapkan **secara terbatas** sebagai lapisan verifikasi identitas user.
Pada implementasi ini, JWT difokuskan pada flow autentikasi user, yaitu:

1. User melakukan login manual melalui endpoint login
2. Server mengembalikan **JWT token** (expires in 15 minutes)
3. Token digunakan untuk mengakses endpoint `/me` yang protected

>💡 **Catatan Desain**: Endpoint CRUD lainnya masih bersifat public dan belum menerapkan access control berbasis role.  
> Pendekatan ini dipilih untuk menjaga fokus project pada arsitektur backend, transaction & data consistency, serta integration testing.

| Method | Endpoint | Deskripsi | Auth Required |
|--------|----------|-----------|---------------|
| POST | `/api/auth/login` | Login user & generate JWT | ❌ |
| GET | `/api/auth/me` | Validasi token & ambil data user | ✅ |

**📌 Format Authorization Header:**
```
Authorization: Bearer <your_jwt_token>
```

**Request Body Login:**
```json
{
  "username": "MulyadiKeceeee",
  "password": "password123"
}
```

**Response Login:**
```json
{
  "message": "Login berhasil",
  "user": {
    "id_petugas": 1,
    "nama_petugas": "Mulyadi",
    "role": "Petugas"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": 900
}
```

---

### 📖 Data Master

`{resource}` dapat berupa:
- **buku** - Data buku perpustakaan
- **anggota** - Data anggota perpustakaan
- **petugas** - Data petugas/admin

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/{resource}` | Ambil semua data |
| GET | `/api/{resource}/{id}` | Ambil data berdasarkan ID |
| POST | `/api/{resource}` | Tambah data baru |
| PUT | `/api/{resource}/{id}` | Update seluruh data |
| PATCH | `/api/{resource}/{id}` | Update sebagian data |
| DELETE | `/api/{resource}/{id}` | Hapus data |

**Contoh Request Body POST /api/buku:**
```json
{
  "judul_buku": "Laskar Pelangi",
  "nama_penerbit": "Gramedia",
  "nama_penulis": "Andrea Hirata",
  "jumlah_halaman": 529,
  "jumlah_buku": 10
}
```

---

### 📤 Peminjaman Buku

| Method | Endpoint | Deskripsi | Notes |
|--------|----------|-----------|-------|
| POST | `/api/peminjaman` | Membuat transaksi peminjaman | Stok buku -1 |
| GET | `/api/peminjaman` | Ambil semua data peminjaman | - |
| GET | `/api/peminjaman/{id}` | Ambil data berdasarkan ID | - |
| DELETE | `/api/peminjaman/{id}` | Hapus data peminjaman | Stok buku +1 |

**Request Body POST /api/peminjaman:**
```json
{
  "id_buku": 1,
  "id_anggota": 1,
  "id_petugas": 1
}
```

**Proses di Backend:**
1. Validasi ID buku, anggota, dan petugas
2. **Lock row buku** untuk mencegah race condition
3. Cek stok buku (harus > 0)
4. Kurangi stok buku
5. Buat record peminjaman
6. Commit transaction

---

### 📥 Pengembalian Buku

| Method | Endpoint | Deskripsi | Notes |
|--------|----------|-----------|-------|
| POST | `/api/pengembalian` | Proses pengembalian buku | Stok +1 jika status "Bagus" |
| GET | `/api/pengembalian` | Ambil semua data pengembalian | - |
| GET | `/api/pengembalian/{id}` | Ambil data berdasarkan ID | - |
| DELETE | `/api/pengembalian/{id}` | Hapus data pengembalian | Rollback status peminjaman |

**Request Body POST /api/pengembalian:**
```json
{
  "id_peminjaman": 1,
  "id_petugas": 1,
  "status_buku": "Bagus"
}
```

**Status Buku:**
- `Bagus` → Stok buku +1
- `Rusak` → Stok buku tidak berubah
- `Hilang` → Stok buku tidak berubah

**Proses di Backend:**
1. Validasi ID peminjaman dan petugas
2. **Lock row peminjaman dan buku**
3. Cek status peminjaman (harus "Dipinjam")
4. Buat record pengembalian
5. Update status peminjaman → "Dikembalikan"
6. Jika status buku "Bagus", tambah stok +1
7. Commit transaction

---

## 🧪 8. Testing

Project ini menggunakan **Jest** dan **Supertest** untuk integration testing.

### Setup Testing

Pastikan database sudah siap sebelum menjalankan test:

```bash
npm run db:create
npm run db:migrate
npm run db:seed
```

### Menjalankan Test

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- anggotaRoutes.test.js
```

### Test Coverage

Project ini memiliki integration tests untuk semua routes:
- ✅ Anggota Routes (6 tests)
- ✅ Auth Routes (3 tests)
- ✅ Buku Routes (6 tests)
- ✅ Peminjaman Routes (4 tests)
- ✅ Pengembalian Routes (4 tests)
- ✅ Petugas Routes (6 tests)

**Total: 29 integration tests**

### Contoh Output Test

```bash
PASS  tests/anggotaRoutes.test.js
PASS  tests/authRoutes.test.js
PASS  tests/bukuRoutes.test.js
PASS  tests/peminjamanRoutes.test.js
PASS  tests/pengembalianRoutes.test.js
PASS  tests/petugasRoutes.test.js

Test Suites: 6 passed, 6 total
Tests:       29 passed, 29 total
Snapshots:   0 total
Time:        5.832 s
```

---

## 🏗️ 9. Arsitektur & Keamanan

### Flow Arsitektur

```
Client Request
      ↓
   Router (Express)
      ↓
   Controller (HTTP handling)
      ↓
   Validation (per-route input validation)
      ↓
   Service (Business Logic & Transaction)
      ↓
   Model (Sequelize ORM)
      ↓
   MySQL Database
      ↓
   Response ke Client
```

**Catatan penting:**
- Validation adalah **gate wajib** sebelum Service dijalankan
- Service **diasumsikan hanya menerima data yang sudah valid**
- Controller tidak menyimpan business logic

---

### Prinsip Desain

1. **Separation of Concerns**
   - Controller: Handle HTTP request/response
   - Service: Business logic & database operations
   - Model: Data structure & relationships
   - Validation: Input validation schemas

2. **Error Handling**
   - Custom error classes (AppError)
   - Centralized error handler middleware
   - Consistent error response format

3. **Database Management**
   - Transaction untuk operasi kritikal
   - Row-level locking untuk race condition
   - Rollback mechanism untuk data consistency

4. **Code Reusability**
   - Validation utilities yang reusable
   - Error factory functions
   - Shared middleware

---

## 🛡️ 10. Fitur Keamanan

### 1. Password Hashing
- Menggunakan **bcryptjs** dengan salt rounds 10
- Password tidak pernah disimpan dalam bentuk plain text
- Hashing dilakukan di service layer sebelum menyimpan ke database

### 2. JWT Authentication
- Token expires dalam 15 menit
- Payload berisi: `id_petugas` dan `role`
- Secret key disimpan di environment variable
- Middleware `verifyToken` untuk protected routes tertentu

### 3. Input Validation
- Validasi input di layer Validations
- Mencegah SQL injection melalui Sequelize ORM
- Type checking untuk semua input
- Email format validation
- Enum validation untuk field tertentu

### 4. CORS Configuration
- Configured untuk allow specific origin
- Credentials support
- Allowed methods: GET, POST, PUT, PATCH, DELETE

### 5. Error Handling
- Tidak expose internal error details ke client
- Custom error messages yang user-friendly
- Stack trace hanya di development mode

---

## 💼 11. Business Logic

### Manajemen Stok Buku

#### Saat Peminjaman
```javascript
// Service: peminjamanService.js
const buku = await Buku.findByPk(id_buku, {
  transaction: t,
  lock: t.LOCK.UPDATE  // ← Pessimistic locking
});

if (buku.jumlah_buku <= 0) {
  throw badRequestError("Stok buku habis");
}

await buku.update(
  { jumlah_buku: buku.jumlah_buku - 1 },
  { transaction: t }
);
```

#### Saat Pengembalian
```javascript
// Service: pengembalianService.js
if (data.status_buku === "Bagus") {
  await buku.increment("jumlah_buku", { 
    by: 1, 
    transaction: t 
  });
}
```

### Status Management

**Peminjaman:**
- `status_pinjam`: "Dipinjam" | "Dikembalikan"
- Default: "Dipinjam"
- Update ke "Dikembalikan" saat pengembalian dibuat

**Anggota:**
- `status_anggota`: "Aktif" | "Tidak Aktif"
- Default: "Aktif"

### Rollback Mechanism

Saat pengembalian dihapus:
1. Status peminjaman kembali ke "Dipinjam"
2. `tanggal_pengembalian` di-reset ke `null`
3. Jika status buku "Bagus", stok dikurangi kembali

---

## ⚠️ 12. Keterbatasan & Rencana Pengembangan

### ❌ Keterbatasan Saat Ini

1. **Access Management Belum Granular**  
   Admin dan Petugas masih memiliki hak akses yang sama. Belum ada pembatasan aksi spesifik berdasarkan role (misalnya hanya Admin yang bisa menghapus data master).

2. **Redundansi Kode**  
   Beberapa logic memiliki pola serupa dan dapat direfaktor menjadi utility atau abstraction layer yang lebih DRY (Don't Repeat Yourself).

3. **Inkonsistensi Module System**  
   - Express runtime menggunakan ES Module (ESM)
   - Sequelize CLI masih menggunakan CommonJS (CJS)
   - Hal ini menambah kompleksitas karena harus maintain dua format

4. **Belum Menggunakan TypeScript**  
   Tidak ada static type checking, meningkatkan risiko bug pada development skala besar.

5. **JWT Token Expiry Pendek**  
   Token hanya valid 15 menit tanpa refresh token mechanism.

6. **Tidak Ada Rate Limiting**  
   API belum dilindungi dari brute force atau DDoS attacks.

7. **Tidak Ada Pagination**  
   Semua endpoint GET mengembalikan seluruh data tanpa pagination.

8. **Tidak Ada Logging System**  
   Belum ada comprehensive logging untuk monitoring dan debugging.

9. **Protected Routes Terbatas**  
   JWT saat ini hanya diterapkan pada endpoint `/api/auth/me` dan belum digunakan sebagai proteksi global untuk endpoint CRUD.


### 🚧 Rencana Pengembangan Selanjutnya

#### Short Term (1-3 bulan)
- ✅ Implementasi **Role-Based Access Control (RBAC)**
  - Admin: Full access
  - Petugas: Restricted access (tidak bisa delete data master)
- ✅ Tambah **Refresh Token** mechanism
- ✅ Implementasi **Pagination & Filtering** di semua GET endpoints
- ✅ Tambah **Rate Limiting** dengan express-rate-limit
- ✅ Setup **Winston Logger** untuk logging

#### Mid Term (3-6 bulan)
- ✅ Refactor redundant code ke shared utilities
- ✅ Unifikasi module system (full ESM atau full CJS)
- ✅ Tambah **Request Validation Middleware** global
- ✅ Implement **API Versioning** (/api/v1, /api/v2)
- ✅ Setup **Docker** untuk containerization
- ✅ Implement **Database Indexing** untuk performance

#### Long Term (6-12 bulan)
- ✅ Migrasi ke **TypeScript** untuk type safety
- ✅ Implement **Microservices Architecture** jika scale bertambah
- ✅ Tambah **Caching Layer** dengan Redis
- ✅ Setup **Monitoring & Alerting** (Prometheus, Grafana)
- ✅ Implement **GraphQL** sebagai alternatif REST API
- ✅ Tambah **Email Notification** system

---

## 🔄 13. CI/CD Pipeline

Project ini menggunakan **GitHub Actions** untuk Continuous Integration.

### Pipeline Flow

```yaml
# .github/workflows/ci.yml
1. Trigger: Push/PR ke branch main atau dev
2. Setup MySQL service (container)
3. Checkout code
4. Setup Node.js 20
5. Install dependencies (npm ci)
6. Setup test environment (.env)
7. Wait for MySQL to be ready
8. Run migrations
9. Run seeders
10. Run all tests
```

### Status Badge
![CI Status](https://github.com/WahyuPratama222/Backend-Perpustakaan/actions/workflows/ci.yml/badge.svg)

### Manual Trigger
Pipeline juga dapat di-trigger secara manual dari tab Actions di GitHub.

---

## 🛠️ 14. Troubleshooting

### Problem: Error "Access denied for user 'root'@'localhost'"

**Solution:**
```bash
# Login ke MySQL
mysql -u root -p

# Update password
ALTER USER 'root'@'localhost' IDENTIFIED BY 'your_new_password';
FLUSH PRIVILEGES;

# Update .env file dengan password baru
```

### Problem: Error "connect ECONNREFUSED 127.0.0.1:3306"

**Solution:**
```bash
# Check apakah MySQL service berjalan
# Windows
net start MySQL80

# macOS/Linux
sudo systemctl start mysql
# atau
sudo service mysql start
```

### Problem: JWT Token Invalid/Expired

**Solution:**
- Token expires dalam 15 menit
- Request token baru melalui `/api/auth/login`
- Pastikan JWT_SECRET di `.env` sama dengan yang digunakan saat generate token

### Problem: Test gagal dengan error "Database not found"

**Solution:**
```bash
# Pastikan database test sudah dibuat
npm run db:create

# Jalankan migration dan seeder
npm run db:migrate
npm run db:seed

# Jalankan test kembali
npm test
```

### Problem: Port 5000 already in use

**Solution:**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:5000 | xargs kill -9
```

---

## 🧾 15. Penutup

Dokumentasi API ini disusun untuk memberikan gambaran yang jelas mengenai struktur endpoint, alur autentikasi, serta batasan implementasi pada tahap pengembangan saat ini.

Beberapa aspek seperti access control berbasis role dan proteksi global pada endpoint CRUD belum diterapkan secara penuh, karena fokus utama project ini diarahkan pada perancangan arsitektur backend, pengelolaan transaksi, dan konsistensi data.

Dokumentasi ini diharapkan dapat menjadi referensi teknis yang akurat terhadap implementasi sistem saat ini, sekaligus menjadi dasar pengembangan lanjutan pada iterasi berikutnya.

— Wahyu Pratama
