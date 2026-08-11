import { Link, Outlet, useLocation } from "react-router";
import CookieManager from "../utils/CookieManager";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const status = CookieManager.get("logged_in");
    setIsLoggedIn(!!status);
  }, [location]);

  const handleLogout = () => {
    CookieManager.remove("logged_in");
    setIsLoggedIn(false);
  };

  return (
    // The min-h-screen ensures the background covers the whole page
    // bg-slate-950 is a very dark "midnight" blue/black
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans">
      {/* --- NAVIGATION BAR --- */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo area */}
            <div className="flex items-center gap-8">
              <Link
                to="/"
                className="text-2xl font-black tracking-tighter text-red-600 hover:text-red-500 transition"
              >
                CINE<span className="text-slate-50">CRITIC</span>
              </Link>

              {/* Desktop Links */}
              <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                <Link
                  to="/movies"
                  className="hover:text-red-500 transition-colors"
                >
                  Movies
                </Link>
                <Link
                  to="/shows"
                  className="hover:text-red-500 transition-colors"
                >
                  TV Shows
                </Link>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-slate-50 transition-colors"
                >
                  About
                </Link>
              </div>
            </div>

            {/* Simple Search Bar (Placeholder) */}
            <SearchBar />

            {/* Login / Logout Section */}
            <div>
              {isLoggedIn ? (
                /* If logged in, show Logout or Profile */
                <div className="flex items-center gap-4">
                  <span className="text-sm text-slate-400 italic">
                    Welcome back!
                  </span>
                  <button
                    onClick={handleLogout}
                    className="text-slate-50 text-sm font-bold py-2 px-5 rounded-md border border-slate-700 hover:bg-slate-800 transition cursor-pointer"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                /* If NOT logged in, show Sign In link */
                <Link
                  to="/login"
                  className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2 px-5 rounded-md transition cursor-pointer"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* This is where your Home, About, etc. pages will render */}
        <Outlet />
      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t border-slate-800 py-10 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} CineCritic. All reviews are
            user-generated.
          </p>
          <div className="flex justify-center gap-6 mt-4 text-xs text-slate-400 font-medium">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
