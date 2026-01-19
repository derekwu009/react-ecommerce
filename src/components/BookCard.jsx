export const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.cover} alt={book.title} />
      <h3 className="title">{book.title}</h3>
      <p className="author">{book.author}</p>
      <p className="price">{book.price}</p>
    </div>
  );
};
