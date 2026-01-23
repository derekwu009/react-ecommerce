import "./EditorsChoice.css";
import { BreadCrumbs } from "../../components/breadcrumbs/Breadcrumbs";
import {
  BookAuthor,
  BookCover,
  BookDesc,
  BookPrice,
  BookTitle,
} from "../../components/bookcard/BookCard";
import { books } from "../../data/BookData";

export const EditorsChoice = () => {
  const choice = books[41];
  return (
    <>
      <section className="editors-choice">
        <div className="site-content">
          <div className="editors-choice-container">
            <div className="head-wrapper">
              <BreadCrumbs page="Editor's Choice" />
            </div>
            <div className="choice-contents">
              <BookCover book={choice} size={{ width: 400, height: 550 }} />
              <div className="choice-info">
                <BookTitle heading="h1" title={choice.title} />
                <BookAuthor author={`By ${choice.author}`} />
                <BookPrice price={`Price: ${choice.price}`} />
                <BookDesc desc={choice.desc} />
                <div className="cart-buttons">
                  <input type="number" defaultValue={1} min="1" max="99" />
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
