import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
import AppNavbar from "./components/AppNavbar";
import AppFooter from "./components/AppFooter";
import Loading from "./components/Loading";

// Lazy pages
const Home = lazy(() => import("./pages/Home"));
const Books = lazy(() => import("./pages/Books"));
const BookDetail = lazy(() => import("./pages/BookDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Component loader
function RouteLoader({ children }) {
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // mỗi lần chuyển url thì on subpend
    setShow(true);
    const t = setTimeout(() => setShow(false), 400);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <>
      {show && <Loading />}
      {children}
    </>
  );
}

function AppRoutes() {
  return (
    <div className="page-wrap">
      <AppNavbar />

      <main className="page-content">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <AppFooter />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteLoader>
        <AppRoutes />
      </RouteLoader>
    </BrowserRouter>
  );
}
