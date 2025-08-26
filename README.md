# 🎮 FinalBoss Community (Setup Phase)

> 🚧 **ยังอยู่ในช่วง Setup เบื้องต้น**  
> ระบบยังไม่พร้อมใช้งาน – เตรียมโครงสร้างเพื่อพัฒนา Web Community สำหรับกลุ่มเพื่อนเล่นเกม

---

## 🧠 Concept

**FinalBoss Community** เป็นเว็บแอปที่ออกแบบมาเพื่อเป็น community platform สำหรับกลุ่มเพื่อนขนาดเล็ก  
มีแนวคิดคล้าย Discord + Facebook Group แบบย่อส่วน พร้อมระบบ track stats และคลัง highlight เกม

---

## 🛠 Tech Stack

### 🖥️ Frontend (client/)
- **React** (with Vite)
- **TypeScript**
- **Tailwind CSS**
- ใช้ `react-router-dom` สำหรับ routing
- เตรียมไว้รองรับ OAuth ในอนาคต

### ⚙️ Backend (server/)
- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **Nodemon** สำหรับ development
- **CORS** สำหรับจัดการ cross-origin
- **jsonwebtoken** สำหรับระบบ auth
- **bcryptjs** สำหรับการเข้ารหัส password
- **dotenv** สำหรับจัดการ environment variables

---

## 📁 โฟลเดอร์หลัก

finalboss_community/
├── client/ # Frontend (React + Tailwind + TypeScript)
├── server/ # Backend (Node.js + Express + MongoDB)

yaml
Copy code

---

## ✅ สถานะโปรเจกต์

- [x] Initial folder structure
- [x] Tailwind setup
- [x] TypeScript config
- [x] Express server config
- [x] MongoDB connection
- [x] .env setup (with dotenv)
- [ ] Auth API
- [ ] UI pages (login, dashboard, etc.)
- [ ] Match schedule system
- [ ] Valorant stats tracker
- [ ] Media gallery

---

## 🚀 การรันโปรเจกต์ (dev mode)

### 📦 Backend

```bash
cd server
npm install
npm run dev
