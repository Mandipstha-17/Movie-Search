# 🎬 Movie Search App

A sleek React.js application to search and explore movies using the OMDb API. Users can search for movies, view search results, and add/remove favorites which persist via localStorage.

---

## 🚀 Features

- 🔍 Real-time movie search using the OMDb API  
- ❤️ Add and remove favorites  
- 💾 Favorites saved in browser's localStorage  
- 🎨 Responsive and modern UI with clean layout  
- ⚙️ Environment-based API key integration  

---

## 🛠️ Tech Stack

- **React.js**
- **Axios** for API calls
- **OMDb API**
- **CSS** (custom styling)

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Mandipstha-17/Movie-Search.git
cd Movie-Search
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add OMDb API Key

Create a `.env` file in the root folder and add your API key:

```env
VITE_OMDB_API_KEY=your_api_key_here //  917ce695
```

> You can get a free OMDb API key from [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)

### 4. Run the App

```bash
npm run dev
```

The app will run at `http://localhost:5173`

---

## 📁 Folder Structure

```
Movie-Search/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── MovieList.jsx
│   │   ├── FavoritesList.jsx
│   │   └── SearchBar.jsx
│   ├── App.css
│   ├── App.jsx
│   └── index.js
├── .env
├── .gitignore
├── package.json
└── README.md
```
---

## 📌 Notes

- Ensure your OMDb API key is valid or the search will fail.
- This app stores favorites in the browser, no backend used.
---

