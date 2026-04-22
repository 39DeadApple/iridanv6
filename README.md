# iridanv6
# 🚛 Fleet Fuel Management System (Prototype)

A modern digital solution to replace manual fuel tracking, Excel reporting, and unverified maintenance workflows for transportation companies.

Built as a scalable MVP to manage **200+ vehicles**, multiple depots, and role-based operations.

---

## 🎯 Project Goal

Replace:

* ❌ Paper-based fuel logs
* ❌ Manual Excel reporting
* ❌ Unverified maintenance claims

With:

* ✅ Real-time fuel tracking
* ✅ Dual validation system (Driver + Depot)
* ✅ Centralized dashboard
* ✅ Proof-based operations (photo evidence)

---

## 🧠 Core Features (MVP)

### 👨‍✈️ Driver App

* Login with role-based access
* Select assigned vehicle
* Submit fuel request:

  * Enter liters requested
  * Capture/upload photo proof
* View fuel history

---

### ⛽ Depot Validation

* View pending fuel requests
* Confirm actual liters provided
* Validate transaction
* Update status (pending → confirmed)

---

### 🖥️ Admin Dashboard

* View all fuel logs
* Filter by:

  * Vehicle
  * Depot
  * Date
* Export data (CSV / Excel)
* Monitor fuel usage

---

## 🔁 Workflow

1. Driver submits fuel request → `pending`
2. Depot validates request → `confirmed`
3. Admin monitors & exports reports

---

## 🏗️ Tech Stack

### Backend

* Node.js (Express)
* PostgreSQL (or Supabase)

### Mobile App

* React Native (Expo)

### Admin Dashboard

* React (Vite or Next.js)

### Dev Tools

* Aider (AI-assisted development)
* GitHub Codespaces

---

## 📦 Project Structure

```
fleet-fuel-system/
│
├── backend/
│   ├── src/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── config/
│
├── mobile-app/
│   ├── screens/
│   ├── components/
│   └── services/
│
├── admin-dashboard/
│   ├── pages/
│   ├── components/
│   └── utils/
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone repository

```bash
git clone https://github.com/your-username/fleet-fuel-system.git
cd fleet-fuel-system
```

---

### 2. Backend setup

```bash
cd backend
npm install
npm run dev
```

---

### 3. Mobile app setup

```bash
cd mobile-app
npm install
npx expo start
```

---

### 4. Admin dashboard

```bash
cd admin-dashboard
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file in backend:

```
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
PORT=5000
```

---

## 🧪 Testing Plan (Pilot Phase)

* Deploy system to **1 depot**
* Assign a small group of drivers
* Monitor:

  * Ease of use
  * Data accuracy
  * Network issues
* Collect feedback and iterate

---

## ⚠️ Known Challenges

* Drivers may resist new system
* Internet connectivity issues
* Data entry errors

### Planned Solutions

* Simple UI (minimal input)
* Offline mode (Phase 2)
* QR code vehicle validation

---

## 🚀 Future Improvements

* QR code scanning for vehicles
* Offline sync capability
* Alerts (overconsumption, anomalies)
* Integration with existing GPS tracking systems
* Maintenance tracking module
* Driver performance scoring

---

## 💼 Business Value

* Reduce fuel fraud
* Increase operational transparency
* Save administrative time
* Improve vehicle monitoring

---

## 📌 Status

🚧 MVP in development
🎯 Goal: Pilot deployment on 1 site

---

## 🤝 Contribution

This project is currently private and under active development.

---

## 📞 Contact

For implementation or collaboration:

* Developer: [Your Name]
* Project: Fleet Fuel Management System

---
