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
    <strong>RESTful API for Library Management System</strong><br />
  </p>

  <p>
    <img src="https://img.shields.io/badge/Status-Active-success" />
    <img src="https://img.shields.io/badge/Version-1.0.0-blue" />
  </p>
</div>

---

## 🌟 Overview

> A structured backend service for managing modern library systems, focusing on **basic security aspects**, **data consistency**, and **REST API best practices**

Library Management System API is a backend service that provides library data management features, from books, members, staff, to book borrowing and return transactions.

This application is designed with a **RESTful API** approach, implementing **Express best practices**, and paying attention to **security, data consistency, and scalability** aspects.

---

## ✨ Key Features

### 🚀 Why This Project? 
- Perfect for **college assignments**, **backend portfolio**, and **medium-scale system practice**
- Implements **transaction & locking** like real systems
- Code structure ready for further development
- Complete with **CI/CD pipeline** using GitHub Actions
- Comprehensive **integration testing** with Jest & Supertest

### 🔹 Core Functionality
- 📖 **Book Management** (Complete CRUD)
- 👥 **Member Management** (Complete CRUD + active/inactive status)
- 👮 **Staff Management** (Complete CRUD + Admin/Staff role)
- 📤 **Book Borrowing Transactions** (stock automatically decreases)
- 📥 **Book Return Transactions** (stock automatically increases + book status)
- 🔐 **JWT-based Authentication** (login & identity verification)

### 🔹 Technical Highlights
- 🎯 **Database Transaction** (ACID) - All critical operations use transactions
- 🔒 **Row-Level Locking** (Pessimistic Locking) - Prevents race conditions on book stock
- ✅ **Input Validation** at every endpoint with custom validation utilities
- 🧪 **Integration Testing** with Jest & Supertest
- 📝 **API Documentation** using Swagger/OpenAPI 3.0
- 🔄 **Rollback Mechanism** - Deleting returns will rollback borrowing status
- 🏗️ **Clean Architecture** - Separation of concerns (Controller → Validation → Service → Model)
- 🛡️ **Authentication & Identity Security** – Bcrypt & JWT
- 🚦 **Centralized Error Handling** with custom error classes

---

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Database Setup](#database-setup)
4. [Environment Configuration](#environment-configuration)
5. [Running the Application](#running-the-application)
6. [Project Structure](#project-structure)
7. [API Endpoints](#api-endpoints)
8. [Testing](#testing)
9. [Architecture & Security](#architecture--security)
10. [Security Features](#security-features)
11. [Business Logic](#business-logic)
12. [Limitations & Development Plans](#limitations--development-plans)
13. [CI/CD Pipeline](#cicd-pipeline)
14. [Troubleshooting](#troubleshooting)
15. [Conclusion](#conclusion)

---

## 🔧 1. Prerequisites

Ensure your development environment meets the following requirements:
- **Node.js** >= 18.x
- **MySQL** >= 8.0
- **npm** >= 6.x
- **Git** (to clone repository)

---

## 📦 2. Installation

Clone the repository and install all dependencies:

```bash
git clone https://github.com/WahyuPratama222/Backend-Perpustakaan.git
cd Backend-Perpustakaan
npm install
```

---

## 🗄️ 3. Database Setup

This project uses **Sequelize CLI** to manage the database.

### 🔹 Automatic Setup (Recommended)

```bash
npm run db:reset
```

This command will:
1. Drop database (if exists)
2. Create new database
3. Run all migrations
4. Run all seeders

### 🔹 Manual Setup

```bash
# Create database
npm run db:create

# Run migrations
npm run db:migrate

# Run seeders (dummy data)
npm run db:seed
```

### 🔹 Other Database Commands

```bash
# Drop database
npm run db:drop

# Reset database (drop + create + migrate + seed)
npm run db:reset
```

---

## ⚙️ 4. Environment Configuration

Create a `.env` file in the project root with the following template:

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

> ⚠️ **Important**: Replace `DB_PASSWORD` and `JWT_SECRET` with secure values!

### Environment Variables Explanation

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `SERVER_PORT` | Express server port | 5000 | No |
| `CLIENT_URL` | Client URL for CORS | - | Yes |
| `DB_NAME` | MySQL database name | perpus | Yes |
| `DB_USER` | MySQL username | root | Yes |
| `DB_PASSWORD` | MySQL password | - | Yes |
| `DB_HOST` | MySQL host | 127.0.0.1 | Yes |
| `DB_PORT` | MySQL port | 3306 | Yes |
| `DB_DIALECT` | Database dialect | mysql | Yes |
| `JWT_SECRET` | Secret key for JWT | - | Yes |

---

## 🚀 5. Running the Application

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

### Access Swagger Documentation
After the server is running, open your browser:
```
http://localhost:5000/api-docs
```

### Default Users for Testing (from seeder)

| Username | Password | Role |
|----------|----------|------|
| MulyadiKeceeee | password123 | Staff |
| AniAdmin | admin456 | Staff |
| BudiPetugas | budi789 | Staff |
| Renosijgo | reno121 | Admin |

---

## 📁 6. Project Structure

```
backend/
├── .github/
│   └── workflows/
│       └── ci.yml                 # GitHub Actions CI pipeline
├── config/
│   ├── config.cjs                 # Sequelize CLI configuration
│   ├── databases.js               # Sequelize instance for runtime
│   └── swagger.js                 # Swagger/OpenAPI configuration
├── controllers/                   # Controller Layer (handle HTTP request/response)
│   ├── anggotaController.js
│   ├── authController.js
│   ├── bukuController.js
│   ├── getUserController.js       # Controller for JWT testing
│   ├── peminjamanController.js
│   ├── pengembalianController.js
│   └── petugasController.js
├── middlewares/                   # Express Middleware
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
├── seeders/                       # Database seeders (dummy data)
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
├── validations/                   # Validation layer per route (gate before service)
│   ├── anggotaValidation.js
│   ├── authValidation.js
│   ├── bukuValidation.js
│   ├── peminjamanValidation.js
│   ├── pengembalianValidation.js
│   └── petugasValidation.js
├── .env.example                   # Environment variables template
├── .gitignore                     # Git ignore rules
├── .sequelizerc                   # Sequelize CLI configuration
├── app.js                         # Express app configuration
├── jest.config.js                 # Jest configuration
├── package.json                   # NPM dependencies & scripts
├── README.md                      # Project documentation
└── server.js                      # Application entry point
```

### Architecture Layer Explanation

1. **Routes** → Define endpoints and HTTP methods
2. **Controllers** → Handle request/response, initial input validation
3. **Services** → Business logic, database transactions, advanced validation
4. **Models** → Database table representation (Sequelize ORM)
5. **Validations** → Dedicated layer for **input validation per route**
6. **Utils** → General purpose helper functions

---

## 🔌 7. API Endpoints

> All endpoints follow **RESTful API** principles and use JSON response format.

### 🔐 Authentication (JWT)

JWT authentication is implemented **in a limited manner** as a user identity verification layer.
In this implementation, JWT is focused on the user authentication flow:

1. User manually logs in through the login endpoint
2. Server returns a **JWT token** (expires in 15 minutes)
3. Token is used to access the protected `/me` endpoint

>💡 **Design Note**: Other CRUD endpoints are still public and do not implement role-based access control.  
> This approach was chosen to maintain project focus on backend architecture, transactions & data consistency, and integration testing.

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/login` | Login user & generate JWT | ❌ |
| GET | `/api/auth/me` | Validate token & get user data | ✅ |

**📌 Authorization Header Format:**
```
Authorization: Bearer <your_jwt_token>
```

**Login Request Body:**
```json
{
  "username": "MulyadiKeceeee",
  "password": "password123"
}
```

**Login Response:**
```json
{
  "message": "Login successful",
  "user": {
    "id_petugas": 1,
    "nama_petugas": "Mulyadi",
    "role": "Staff"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": 900
}
```

---

### 📖 Master Data

`{resource}` can be:
- **buku** - Library book data
- **anggota** - Library member data
- **petugas** - Staff/admin data

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/{resource}` | Get all data |
| GET | `/api/{resource}/{id}` | Get data by ID |
| POST | `/api/{resource}` | Add new data |
| PUT | `/api/{resource}/{id}` | Update all data |
| PATCH | `/api/{resource}/{id}` | Update partial data |
| DELETE | `/api/{resource}/{id}` | Delete data |

**Example Request Body POST /api/buku:**
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

### 📤 Book Borrowing

| Method | Endpoint | Description | Notes |
|--------|----------|-------------|-------|
| POST | `/api/peminjaman` | Create borrowing transaction | Book stock -1 |
| GET | `/api/peminjaman` | Get all borrowing data | - |
| GET | `/api/peminjaman/{id}` | Get data by ID | - |
| DELETE | `/api/peminjaman/{id}` | Delete borrowing data | Book stock +1 |

**Request Body POST /api/peminjaman:**
```json
{
  "id_buku": 1,
  "id_anggota": 1,
  "id_petugas": 1
}
```

**Backend Process:**
1. Validate book, member, and staff IDs
2. **Lock book row** to prevent race condition
3. Check book stock (must be > 0)
4. Decrease book stock
5. Create borrowing record
6. Commit transaction

---

### 📥 Book Return

| Method | Endpoint | Description | Notes |
|--------|----------|-------------|-------|
| POST | `/api/pengembalian` | Process book return | Stock +1 if status "Good" |
| GET | `/api/pengembalian` | Get all return data | - |
| GET | `/api/pengembalian/{id}` | Get data by ID | - |
| DELETE | `/api/pengembalian/{id}` | Delete return data | Rollback borrowing status |

**Request Body POST /api/pengembalian:**
```json
{
  "id_peminjaman": 1,
  "id_petugas": 1,
  "status_buku": "Bagus"
}
```

**Book Status:**
- `Bagus` (Good) → Book stock +1
- `Rusak` (Damaged) → Book stock unchanged
- `Hilang` (Lost) → Book stock unchanged

**Backend Process:**
1. Validate borrowing and staff IDs
2. **Lock borrowing and book rows**
3. Check borrowing status (must be "Borrowed")
4. Create return record
5. Update borrowing status → "Returned"
6. If book status is "Good", add stock +1
7. Commit transaction

---

## 🧪 8. Testing

This project uses **Jest** and **Supertest** for integration testing.

### Testing Setup

Ensure the database is ready before running tests:

```bash
npm run db:create
npm run db:migrate
npm run db:seed
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- anggotaRoutes.test.js
```

### Test Coverage

This project has integration tests for all routes:
- ✅ Member Routes (6 tests)
- ✅ Auth Routes (3 tests)
- ✅ Book Routes (6 tests)
- ✅ Borrowing Routes (4 tests)
- ✅ Return Routes (4 tests)
- ✅ Staff Routes (6 tests)

**Total: 29 integration tests**

### Example Test Output

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

## 🏗️ 9. Architecture & Security

### Architecture Flow

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
   Response to Client
```

**Important notes:**
- Validation is a **mandatory gate** before Service execution
- Service **assumes it only receives validated data**
- Controller doesn't contain business logic

---

### Design Principles

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
   - Transaction for critical operations
   - Row-level locking for race conditions
   - Rollback mechanism for data consistency

4. **Code Reusability**
   - Reusable validation utilities
   - Error factory functions
   - Shared middleware

---

## 🛡️ 10. Security Features

### 1. Password Hashing
- Uses **bcryptjs** with 10 salt rounds
- Passwords never stored in plain text
- Hashing done in service layer before database storage

### 2. JWT Authentication
- Token expires in 15 minutes
- Payload contains: `id_petugas` and `role`
- Secret key stored in environment variable
- `verifyToken` middleware for specific protected routes

### 3. Input Validation
- Input validation in Validations layer
- Prevents SQL injection through Sequelize ORM
- Type checking for all inputs
- Email format validation
- Enum validation for specific fields

### 4. CORS Configuration
- Configured to allow specific origin
- Credentials support
- Allowed methods: GET, POST, PUT, PATCH, DELETE

### 5. Error Handling
- Doesn't expose internal error details to client
- User-friendly custom error messages
- Stack trace only in development mode

---

## 💼 11. Business Logic

### Book Stock Management

#### During Borrowing
```javascript
// Service: peminjamanService.js
const buku = await Buku.findByPk(id_buku, {
  transaction: t,
  lock: t.LOCK.UPDATE  // ← Pessimistic locking
});

if (buku.jumlah_buku <= 0) {
  throw badRequestError("Book stock depleted");
}

await buku.update(
  { jumlah_buku: buku.jumlah_buku - 1 },
  { transaction: t }
);
```

#### During Return
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

**Borrowing:**
- `status_pinjam`: "Dipinjam" (Borrowed) | "Dikembalikan" (Returned)
- Default: "Dipinjam"
- Updates to "Dikembalikan" when return is created

**Member:**
- `status_anggota`: "Aktif" (Active) | "Tidak Aktif" (Inactive)
- Default: "Aktif"

### Rollback Mechanism

When a return is deleted:
1. Borrowing status reverts to "Borrowed"
2. `tanggal_pengembalian` is reset to `null`
3. If book status is "Good", stock is decreased again

---

## ⚠️ 12. Limitations & Development Plans

### ❌ Current Limitations

1. **Non-Granular Access Management**  
   Admin and Staff still have the same access rights. There are no specific action restrictions based on roles (for example, only Admin can delete master data).

2. **Code Redundancy**  
   Some logic has similar patterns and can be refactored into utilities or more DRY (Don't Repeat Yourself) abstraction layers.

3. **Module System Inconsistency**  
   - Express runtime uses ES Module (ESM)
   - Sequelize CLI still uses CommonJS (CJS)
   - This adds complexity as we need to maintain two formats

4. **Not Using TypeScript**  
   No static type checking, increasing bug risk in large-scale development.

5. **Short JWT Token Expiry**  
   Token only valid for 15 minutes without refresh token mechanism.

6. **No Rate Limiting**  
   API not protected from brute force or DDoS attacks.

7. **No Pagination**  
   All GET endpoints return all data without pagination.

8. **No Logging System**  
   No comprehensive logging for monitoring and debugging.

9. **Limited Protected Routes**  
   JWT currently only applied to `/api/auth/me` endpoint and not used as global protection for CRUD endpoints.

### 🚧 Future Development Plans

#### Short Term (1-3 months)
- ✅ Implement **Role-Based Access Control (RBAC)**
  - Admin: Full access
  - Staff: Restricted access (cannot delete master data)
- ✅ Add **Refresh Token** mechanism
- ✅ Implement **Pagination & Filtering** in all GET endpoints
- ✅ Add **Rate Limiting** with express-rate-limit
- ✅ Setup **Winston Logger** for logging

#### Mid Term (3-6 months)
- ✅ Refactor redundant code to shared utilities
- ✅ Unify module system (full ESM or full CJS)
- ✅ Add global **Request Validation Middleware**
- ✅ Implement **API Versioning** (/api/v1, /api/v2)
- ✅ Setup **Docker** for containerization
- ✅ Implement **Database Indexing** for performance

#### Long Term (6-12 months)
- ✅ Migrate to **TypeScript** for type safety
- ✅ Implement **Microservices Architecture** if scale increases
- ✅ Add **Caching Layer** with Redis
- ✅ Setup **Monitoring & Alerting** (Prometheus, Grafana)
- ✅ Implement **GraphQL** as REST API alternative
- ✅ Add **Email Notification** system

---

## 🔄 13. CI/CD Pipeline

This project uses **GitHub Actions** for Continuous Integration.

### Pipeline Flow

```yaml
# .github/workflows/ci.yml
1. Trigger: Push/PR to main or dev branch
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
Pipeline can also be triggered manually from the Actions tab on GitHub.

---

## 🛠️ 14. Troubleshooting

### Problem: Error "Access denied for user 'root'@'localhost'"

**Solution:**
```bash
# Login to MySQL
mysql -u root -p

# Update password
ALTER USER 'root'@'localhost' IDENTIFIED BY 'your_new_password';
FLUSH PRIVILEGES;

# Update .env file with new password
```

### Problem: Error "connect ECONNREFUSED 127.0.0.1:3306"

**Solution:**
```bash
# Check if MySQL service is running
# Windows
net start MySQL80

# macOS/Linux
sudo systemctl start mysql
# or
sudo service mysql start
```

### Problem: JWT Token Invalid/Expired

**Solution:**
- Token expires in 15 minutes
- Request new token through `/api/auth/login`
- Ensure JWT_SECRET in `.env` is the same as when generating token

### Problem: Test fails with error "Database not found"

**Solution:**
```bash
# Ensure test database is created
npm run db:create

# Run migration and seeder
npm run db:migrate
npm run db:seed

# Run test again
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

## 🧾 15. Conclusion

This API documentation is structured to provide a clear picture of endpoint structure, authentication flow, and implementation limitations at the current development stage.

Some aspects such as role-based access control and global protection on CRUD endpoints have not been fully implemented, as the main focus of this project is directed at backend architecture design, transaction management, and data consistency.

This documentation is expected to serve as an accurate technical reference for the current system implementation, as well as a foundation for further development in the next iteration.

— Wahyu Pratama

