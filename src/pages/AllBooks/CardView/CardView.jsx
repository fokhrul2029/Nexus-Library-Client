/* eslint-disable react/prop-types */

import Card from "../Card/Card";

function CardView({ available, books }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {books?.map((book) =>
        available ? (
          <Card key={book._id} book={book} />
        ) : (
          book.quantity > 0 && <Card key={book._id} book={book} />
        )
      )}
    </div>
  );
}

export default CardView;
