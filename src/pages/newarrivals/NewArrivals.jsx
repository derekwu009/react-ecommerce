import "./NewArrivals.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

export const NewArrivals = () => {
  return (
    <>
      <Header />
      <section className="main-content">
        <div className="new-arrivals">
          <h1>new arrivals</h1>
        </div>
      </section>
      <Footer />
    </>
  );
};
