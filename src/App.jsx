import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import AboutMe from "./routes/AboutMe";
import Projects from "./routes/Projects";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: "/projects",
        element: <Projects />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;