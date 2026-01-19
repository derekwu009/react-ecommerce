import { faker } from "@faker-js/faker";

export const books = Array.from({ length: 67 }).map(() => ({
  id: faker.string.uuid(),
  title: faker.book.title(),
  author: faker.book.author(),
  genre: faker.book.genre(),
  publisher: faker.book.publisher(),
  isbn: faker.commerce.isbn(),
  price: faker.commerce.price({ min: 15, max: 30, symbol: "$" }),
  cover: "https://placehold.co/200x300?text=Book+Cover",
}));
