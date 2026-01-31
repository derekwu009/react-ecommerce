import "./BookInfo.css";
import {
  BookAuthor,
  BookCover,
  BookDesc,
  BookPrice,
  BookTitle,
} from "../../components/bookcard/BookCard";
import { CartButtons } from "../cart/CartButtons";

export const BookInfo = ({ book, clickable = true }) => {
  return (
    <>
      <div className="site-content">
        <div className="product-page-container">
          <div className="product-contents">
            <BookCover book={book} clickable={clickable} />
            <div className="product-info">
              <div className="product-heading">
                <BookTitle heading="h1" title={book.title} />
                <BookAuthor author={`By ${book.author}`} />
                <BookPrice price={`Price: ${book.price}`} />
              </div>
              <BookDesc desc={book.desc} />
              <CartButtons book={book} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
