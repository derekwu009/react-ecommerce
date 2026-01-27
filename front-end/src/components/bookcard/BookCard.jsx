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

export const BookCover = ({ book }) => {
  return (
    <img
      className="book-cover"
      src={book.cover}
      alt={book.title}
      style={{ objectFit: "fill" }}
      onLoad={(e) => {
        const img = e.currentTarget;
        if (img.naturalWidth == 1 || img.naturalHeight == 1) {
          img.src = "https://placehold.co/285x430?text=No+Cover";
        }
      }}
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
        <BookCover key={book.id} book={book} />
      ))}
    </>
  );
};

export const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <BookCover book={book} />
      <BookTitle heading="h3" title={book.title} />
      <BookAuthor author={book.author} />
      <BookPrice price={book.price} />
    </div>
  );
};

export const BookGrid = ({ books }) => {
  return (
    <>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </>
  );
};
