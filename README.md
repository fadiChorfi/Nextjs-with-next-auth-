# 🔐 AuthNextJS – Fullstack Auth App with Next.js 14, NextAuth, Drizzle ORM

A modern authentication system built using:

- ✅ Next.js 14 App Router
- ✅ NextAuth.js (Credentials Provider)
- ✅ Drizzle ORM + PostgreSQL
- ✅ Secure Password Hashing with bcryptjs
- ✅ Edge Middleware route protection
- ✅ Clean UI with TailwindCSS & ShadCN
- ✅ Auto Login on Sign Up
- ✅ Protected dashboard for authenticated users

---

## 🚀 Features

- 🌐 **Sign Up & Login with Credentials**
- 🔐 **JWT-based Authentication**
- 🛡️ **Protected Routes using Edge Middleware**
- 💾 **Persistent Sessions via Cookies**
- 🧠 **Auto Login after successful sign up**
- 🪪 **Session-aware UI (hide login/signup if logged in)**
- 🌈 **Styled with TailwindCSS + ShadCN UI**
- 🧰 **Drizzle ORM for type-safe PostgreSQL access**
- ✨ Ready for role-based auth extension (admin/user)

---

## 🧱 Tech Stack

| Layer         | Tech                            |
| ------------- | ------------------------------- |
| Frontend      | React + Next.js 14 (App Router) |
| Backend API   | Next.js Route Handlers          |
| Auth          | NextAuth.js + Credentials       |
| Database ORM  | Drizzle ORM                     |
| Styling       | TailwindCSS + ShadCN            |
| Password Hash | bcryptjs                        |

---

## 📁 Folder Structure

src/app/
├── (auth)/
│ ├── login/page.tsx
│ ├── signup/page.tsx
│ └── layout.tsx # Shared layout
├── dashboard/page.tsx # Protected Dashboard
├── middleware.ts # Edge Middleware (auth guard)
├── actions/ # Sign up & login actions
├── lib/
│ ├── db.ts # Drizzle DB config
│ ├── authOptions.ts # NextAuth config
│ └── utils.ts # Helpers (e.g. cn)
├── components/ # UI components (input, button, card...)
└── pages/api/auth/[...nextauth].ts # NextAuth route

yaml
Copy
Edit

---

## 🛠️ Setup & Run

### 1. Clone the project

```bash
git clone https://github.com/yourname/authnextjs
cd authnextjs
```
