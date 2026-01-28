import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Outlet } from "react-router-dom";
import { ScrollToTop } from "../../utils/scrolltotop/SrollToTop";

export const Layout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
