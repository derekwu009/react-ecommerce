import "./BookCard.css";

export const BookTitle = ({ heading, title }) => {
  const HeadingTag = heading;
  return <HeadingTag className="title">{title}</HeadingTag>;
};

export const BookAuthor = ({ author }) => {
  return (
    <span className="author">
      {author} <br />
    </span>
  );
};

export const BookPrice = ({ price }) => {
  return <span className="price">{price}</span>;
};

export const BookCover = ({ book, size }) => {
  return (
    <img
      className="book-cover"
      src={book.cover}
      alt={book.title}
      style={{ width: size.width, height: size.height, objectFit: "cover" }}
    />
  );
};

export const BookDesc = ({ desc }) => {
  return <p className="desc">{desc}</p>;
};

export const BookCoverGrid = ({ books }) => {
  return (
    <>
      {books.map((book) => (
        <BookCover
          key={book.id}
          book={book}
          size={{ width: 350, height: 500 }}
        />
      ))}
    </>
  );
};

export const BookCard = ({ book, coverWidth, coverHeight }) => {
  return (
    <div className="book-card">
      <BookCover
        book={book}
        size={{ width: coverWidth, height: coverHeight }}
      />
      <BookTitle heading="h3" title={book.title} />
      <BookAuthor author={book.author} />
      <BookPrice price={book.price} />
    </div>
  );
};

export const BookGrid = ({ books, coverWidth, coverHeight }) => {
  return (
    <>
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          coverWidth={coverWidth}
          coverHeight={coverHeight}
        />
      ))}
    </>
  );
};
