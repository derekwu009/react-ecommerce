import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/homepage/HomePage";
import { AllBooks } from "./pages/allbooks/AllBooks";
import { BestSellers } from "./pages/bestsellers/BestSellers";
import { EditorsChoice } from "./pages/editorschoice/EditorsChoice";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { Layout } from "./components/layout/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "all-books",
        element: <AllBooks />,
      },
      {
        path: "best-sellers",
        element: <BestSellers />,
      },
      {
        path: "editors-choice",
        element: <EditorsChoice />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
