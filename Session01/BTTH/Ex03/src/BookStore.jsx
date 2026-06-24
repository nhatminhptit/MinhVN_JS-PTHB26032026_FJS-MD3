import React, { useState } from "react";
import BookItem from "./BookItem";

function BookStore() {
  const [books, setBooks] = useState([
    { id: 1, name: "Clean Code", author: "Robert C. Martin" },
    { id: 2, name: "Đắc Nhân Tâm", author: "Dale Carnegie" },
    { id: 3, name: "Nhà Giả Kim", author: "Paulo Coelho" },
  ]);

  if (books.length === 0) {
    return (
      <h3>Hiện chưa có cuốn sách nào trong kho</h3>
    );
  }

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Danh sách sách</h2>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookStore;
