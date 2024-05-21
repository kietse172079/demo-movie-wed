import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieManagement from "./pages/movie-management";
import HomePage from "./pages/home";
import Layout from "./components/layout";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
