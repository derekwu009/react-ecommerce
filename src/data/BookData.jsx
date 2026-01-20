import { faker } from "@faker-js/faker";

export const books = Array.from({ length: 67 }).map(() => ({
  id: faker.string.uuid(),
  title: faker.book.title(),
  author: faker.book.author(),
  genre: faker.book.genre(),
  publisher: faker.book.publisher(),
  isbn: faker.commerce.isbn(),
  price: faker.commerce.price({ min: 15, max: 30, symbol: "$" }),
  rating: faker.number.float({ min: 4, max: 5, fractionDigits: 2 }),
  cover: "https://placehold.co/285x430?text=Book+Cover",
}));
