import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="app-container">
      <nav>
        {/* Use Link instead of <a href> to prevent page reloads */}
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <main style={{ padding: "20px" }}>
        {/* This is where the Home or About page will appear */}
        <Outlet />
      </main>

      <footer>
        <p>© 2026 My React App</p>
      </footer>
    </div>
  );
};

export default Layout;
