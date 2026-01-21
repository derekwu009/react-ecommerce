import "./About.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

export const About = () => {
  return (
    <>
      <Header />
      <section className="main-content">
        <div className="about">
          <h1>about</h1>
        </div>
      </section>
      <Footer />
    </>
  );
};
