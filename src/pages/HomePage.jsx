import { Header } from "../components/Header";
import { books } from "../data/BookData";
import { BookCard } from "../components/BookCard";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="content">
        <h1 className="homepage-title">HomePage</h1>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};
