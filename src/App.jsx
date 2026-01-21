import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/homepage/HomePage";
import { NewArrivals } from "./pages/newarrivals/NewArrivals";
import { AllBooks } from "./pages/allbooks/AllBooks";
import { BestSellers } from "./pages/bestsellers/BestSellers";
import { EditorsPicks } from "./pages/editorspicks/EditorsPicks";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/new-arrivals",
    element: <NewArrivals />,
  },
  {
    path: "/all-books",
    element: <AllBooks />,
  },
  {
    path: "/best-sellers",
    element: <BestSellers />,
  },
  {
    path: "/editors-pick",
    element: <EditorsPicks />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
