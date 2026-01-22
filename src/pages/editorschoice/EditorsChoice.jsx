import "./EditorsChoice.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { BreadCrumbs } from "../../components/breadcrumbs/Breadcrumbs";

export const EditorsChoice = () => {
  return (
    <>
      <Header />
      <section className="editors-choice">
        <div className="site-content">
          <div className="editors-choice-container">
            <div className="head-wrapper">
              <BreadCrumbs page="Editor's Choice" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
