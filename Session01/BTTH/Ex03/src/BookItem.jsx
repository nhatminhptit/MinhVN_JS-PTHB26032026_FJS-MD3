import React from "react";

function BookItem(props) {
  const { book } = props;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>{book.name}</h3>
      <p>
        <strong>Tác giả:</strong> {book.author}
      </p>
    </div>
  );
}

export default BookItem;
