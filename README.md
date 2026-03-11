<div align="center">

# 💕 Sweet Memories — Slam Book

### _A beautiful digital slam book to collect sweet memories from your besties forever_

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Website-ff6b9d?style=for-the-badge)](https://slam-book-website.vercel.app/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)

---

_♥ ♥ ♥ Every page holds a piece of my heart ♥ ♥ ♥_

</div>

---

## ✨ What is Sweet Memories?

**Sweet Memories** is a fully digital, interactive slam book — the kind you used to pass around in school, but now beautifully designed for the web. Share the link with your friends, let them fill in their details, and browse all the lovely entries in a flip-page book view. Owner-only password protection keeps your memories safe. 💗

---

## 🌟 Features

- **✏️ Interactive Quiz** — Step-by-step question flow with animations and progress tracking
- **✍️ Signature Pad** — Friends can hand-draw their signature (touch + mouse supported)
- **📖 Flip-Book Viewer** — Desktop: elegant 3D page flip animation. Mobile: swipe-friendly single-page carousel
- **🔒 Password Protected** — Only the owner can view all entries
- **⬇️ PDF Download** — Download individual entries OR the full book as a PDF (with cover & back cover pages!)
- **🗑️ Delete Entries** — Remove any entry with a confirmation prompt
- **💕 Floating Hearts** — Animated hearts float in the background
- **📱 Fully Responsive** — Works beautifully on mobile, tablet, and desktop
- **🎨 Gorgeous Design** — Pink & rose aesthetic with Dancing Script & Playfair Display fonts

---

## 🛠️ Tech Stack

| Layer                 | Technology                                              |
| --------------------- | ------------------------------------------------------- |
| Frontend              | Vanilla HTML, CSS, JavaScript                           |
| Backend               | Node.js + Express.js                                    |
| Database              | MongoDB + Mongoose                                      |
| Deployment (Frontend) | Vercel                                                  |
| Deployment (Backend)  | Render                                                  |
| PDF Generation        | html2canvas + jsPDF                                     |
| Fonts                 | Google Fonts (Dancing Script, Playfair Display, Nunito) |

---

## 📁 Project Structure

```
sweet-memories/
├── frontend/
│   ├── index.html          # Complete frontend (single file)
│
├── backend/
│   ├── server.js       # Express API server
│   ├── .env            # Environment variables (not committed)
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- [MongoDB Atlas](https://www.mongodb.com/atlas) account (or local MongoDB)
- [Git](https://git-scm.com/)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/akhilpulipelly-collab/slam-book-website.git
cd sweet-memories-slam-book
```

---

### 2️⃣ Set Up the Backend

```bash
cd server
npm install
```

Create a `.env` file in the `server/` folder:

```env
MONGODB_URI=your_mongodb_connection_string_here
PORT=5000
```

> 💡 Get your MongoDB URI from [MongoDB Atlas](https://www.mongodb.com/atlas) → Connect → Drivers

Start the backend server:

```bash
node server.js
```

You should see:

```
✅ MongoDB connected
🚀 Server running on port 5000
```

---

### 3️⃣ Configure the Frontend

Open `index.html` and update these two constants near the top of the `<script>` tag:

```javascript
const OWNER_PWD = "your_secret_password"; // 🔧 Change this!
const API_BASE = "http://localhost:5000/api"; // 🔧 Use your backend URL
```

---

### 4️⃣ Run Locally

Simply open `index.html` in your browser — no build step needed!

```bash
# Or serve with any static server, e.g.:
npx serve .
```

---

## 🌐 Deployment

### Frontend → Vercel

1. Push `index.html` to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Vercel will auto-detect and deploy it as a static site
4. Once deployed, copy your Vercel URL and update `API_BASE` in `index.html`

### Backend → Render

1. Push your `server/` folder to GitHub
2. Go to [render.com](https://render.com) → **New Web Service** → Connect your repo
3. Set the following:
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
4. Add Environment Variables in Render dashboard:
   - `MONGODB_URI` → your MongoDB Atlas connection string
   - `PORT` → `5000`
5. Copy your Render URL (e.g. `https://slam-book-api.onrender.com`) and update `API_BASE` in your frontend

```javascript
const API_BASE = "https://your-app-name.onrender.com/api";
```

---

## 🔌 API Reference

Base URL: `https://your-backend.onrender.com/api`

| Method   | Endpoint           | Description                  |
| -------- | ------------------ | ---------------------------- |
| `GET`    | `/`                | Health check                 |
| `POST`   | `/api/submit`      | Submit a new slam book entry |
| `GET`    | `/api/entries`     | Get all entries (owner view) |
| `DELETE` | `/api/entries/:id` | Delete an entry by ID        |

### POST `/api/submit` — Request Body

```json
{
  "firstName": "Priya",
  "MobileNo": "9876543210",
  "nickname": "Pri",
  "callMeAs": "Bestie",
  "birthDate": "2000-05-14",
  "favSong": "Tum Hi Ho",
  "favMovie": "DDLJ",
  "hobbies": "Reading, Dancing",
  "bestFriends": "Riya, Sneha",
  "ourFriendship": "We are soul sisters!",
  "memory": "That rainy day we got lost together...",
  "describeme": "She is sunshine in human form",
  "thoughts": "I think you are amazing...",
  "loveDefn": "Love is home.",
  "advice": "Always stay true to yourself.",
  "sweetMessage": "You are my forever bestie 💕",
  "signature": "data:image/png;base64,..."
}
```

### GET `/api/entries` — Response

```json
{
  "success": true,
  "entries": [
    {
      "_id": "64abc...",
      "firstName": "Priya",
      "submittedAt": "2024-02-14T10:30:00.000Z",
      ...
    }
  ]
}
```

---

## ⚙️ Customization

### Change Password

In `index.html`, find and update:

```javascript
const OWNER_PWD = "slambook"; // ← Change this to your password
```

### Add / Remove Questions

Edit the `questions` array in `index.html`:

```javascript
const questions = [
  {
    id: "firstName",
    emoji: "👋",
    text: "What's your Name, bestie?",
    type: "text",
    ph: "Your name...",
    req: true,
  },
  // Add your own:
  {
    id: "myQuestion",
    emoji: "🌟",
    text: "Your custom question here?",
    type: "textarea",
    ph: "Type here...",
  },
];
```

Also add the new field to the MongoDB schema in `server.js`:

```javascript
const slambookSchema = new mongoose.Schema({
  myQuestion: String,
  // ...existing fields
});
```

### Change Color Theme

Edit CSS variables at the top of `index.html`:

```css
:root {
  --pink: #ff6b9d;
  --rose: #c9184a;
  --red: #e8294b;
  /* Change these to any colors you like! */
}
```

---

## 🛠️ Troubleshooting

| Problem                            | Solution                                                                           |
| ---------------------------------- | ---------------------------------------------------------------------------------- |
| Frontend not connecting to backend | Check `API_BASE` URL in `index.html`; make sure backend is running                 |
| MongoDB connection errors          | Verify `MONGODB_URI` in `.env`; check Atlas network access (allow `0.0.0.0/0`)     |
| Port conflicts                     | Change `PORT` in `.env` and update the frontend URL accordingly                    |
| CORS errors                        | Add your frontend domain to the `origin` array in `server.js` CORS config          |
| PDF download blank/broken          | Ensure fonts load before capture; `html2canvas` may need CORS headers on images    |
| Render backend sleeping            | Render free tier spins down after inactivity — first request may take ~30s to wake |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with 💕 and a lot of friendship

_♥ ♥ ♥ Some hearts understand each other even in silence ♥ ♥ ♥_

</div>
