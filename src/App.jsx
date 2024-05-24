import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieManagement from "./pages/movie-management";
import HomePage from "./pages/home";
import Layout from "./components/layout";
import Login from "./pages/login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/movie-management",
          element: <MovieManagement />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
