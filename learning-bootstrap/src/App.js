import React, { useMemo, useState } from "react";
import "./App.css";

const newsData = [
  {
    id: "1",
    title: "Vietnam Achieves Record Economic Growth in 2025",
    image: "/images/economy.jpg",
    content: "...",
    author: "Nguyen Van A",
    date: "2025-08-15",
  },
  {
    id: "2",
    title: "Technology Startups Flourish in Ho Chi Minh City",
    image: "/images/startup.jpg",
    content: "...",
    author: "Tran Thi B",
    date: "2025-08-12",
  },
  {
    id: "3",
    title: "Can Tho Hosts International Tourism Festival",
    image: "/images/tourism.jpg",
    content: "...",
    author: "Le Van C",
    date: "2025-08-10",
  },
  {
    id: "4",
    title: "Hanoi Expands Metro System to Ease Traffic Congestion",
    image: "/images/metro.jpg",
    content: "...",
    author: "Pham Thi D",
    date: "2025-08-08",
  },
  {
    id: "5",
    title: "Vietnamese Football Team Qualifies for Asian Cup Finals",
    image: "/images/football.jpg",
    content: "...",
    author: "Nguyen Van E",
    date: "2025-08-05",
  },
  {
    id: "6",
    title: "Da Nang Becomes a Smart City with AI Integration",
    image: "/images/danang.jpg",
    content: "...",
    author: "Tran Thi F",
    date: "2025-08-02",
  },
  {
    id: "7",
    title: "Mekong Delta Farmers Embrace Green Farming Practices",
    image: "/images/farming.jpg",
    content: "...",
    author: "Le Van G",
    date: "2025-07-30",
  },
  {
    id: "8",
    title: "Vietnam Airlines Expands International Routes to Europe",
    image: "/images/airlines.jpg",
    content: "...",
    author: "Pham Thi H",
    date: "2025-07-28",
  },
  {
    id: "9",
    title: "Ho Chi Minh City Introduces Electric Buses",
    image: "/images/ebus.jpg",
    content: "...",
    author: "Nguyen Van I",
    date: "2025-07-25",
  },
];

export default function App() {
  const [keyword, setKeyword] = useState("");

  const hero = newsData[0];

  const filteredNews = useMemo(() => {
    const k = keyword.trim().toLowerCase();
    if (!k) return newsData;

    return newsData.filter((n) => {
      return (
        n.title.toLowerCase().includes(k) ||
        n.author.toLowerCase().includes(k) ||
        n.content.toLowerCase().includes(k)
      );
    });
  }, [keyword]);

  return (
    <div className="app-bg">
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg app-topbar">
        <div className="container">
          <a
            className="navbar-brand fw-bold text-white d-flex align-items-center"
            href="/"
          >
            <img
              src="/images/logo.png"
              alt="logo"
              style={{ height: 30 }}
              className="me-2"
            />
            FPT Newsify
          </a>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link fw-semibold text-white" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-white" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* MAIN */}
      <main className="container py-4">
        {/* HERO */}
        <div className="card shadow-sm border-0 overflow-hidden hero-card">
          <div className="position-relative">
            <img src={hero.image} alt="hero" className="w-100 hero-img" />

            <div className="hero-overlay">
              <h1 className="hero-title">{hero.title}</h1>
              <p className="mb-0">
                {hero.date} - {hero.author}
              </p>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="card shadow-sm border-0 p-3 mt-3">
          <div className="input-group">
            <span className="input-group-text bg-white">
              <i className="bi bi-search"></i>
            </span>
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Search news by title, author, or content..."
            />
          </div>
        </div>

        {/* GRID */}
        <div className="row g-4 mt-2">
          {filteredNews.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 news-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top news-img"
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{item.title}</h5>

                  <p className="text-muted mb-2 small">
                    Time: {item.date} - Author: {item.author}
                  </p>

                  <p className="card-text small">
                    {item.content.length > 100
                      ? item.content.slice(0, 100) + "..."
                      : item.content}
                  </p>

                  <button className="btn btn-warning text-white mt-auto">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-3 mt-4 app-footer">
        <div className="container text-center">
          © 2025 FPT Campus Can Tho Newsify, All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
