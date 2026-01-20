import "../components/BookCard.css";

export const BookImage = ({ book, size }) => {
  return (
    <img
      src={book.cover}
      alt={book.title}
      style={{ width: size.width, height: size.height, objectFit: "cover" }}
    />
  );
};

export const BookImageGrid = ({ books }) => {
  return (
    <>
      {books.map((book) => (
        <BookImage
          key={book.id}
          book={book}
          size={{ width: 350, height: 500 }}
        />
      ))}
    </>
  );
};

export const BookCard = ({ title, author, price, cover, rating }) => {
  return (
    <div className="book-card">
      <img src={cover} alt={title} />
      <h3 className="title">{title}</h3>
      <span className="author">
        {author} <br />
      </span>
      <span className="rating">
        {rating} <br />
      </span>
      <span className="price">{price}</span>
    </div>
  );
};

export const BookGrid = ({ books }) => {
  return (
    <>
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          price={book.price}
          cover={book.cover}
          rating={book.rating}
        />
      ))}
    </>
  );
};
