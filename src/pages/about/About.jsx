import "./About.css";
import { BreadCrumbs } from "../../components/breadcrumbs/Breadcrumbs";
import { faker } from "@faker-js/faker";

export const About = () => {
  return (
    <>
      <section className="about">
        <div className="site-content">
          <div className="about-container">
            <div className="head-wrapper">
              <BreadCrumbs page="About" />
            </div>
            <div className="about-contents">
              <h1>Who are we?</h1>
              <p>{faker.lorem.sentences(50)}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
