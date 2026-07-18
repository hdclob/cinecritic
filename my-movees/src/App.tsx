import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <h1>404 - Page Not Found</h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
