import "./BestSellers.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

export const BestSellers = () => {
  return (
    <>
      <Header />
      <section className="main-content">
        <div className="best-sellers">
          <h1>new arrivals</h1>
        </div>
      </section>
      <Footer />
    </>
  );
};
