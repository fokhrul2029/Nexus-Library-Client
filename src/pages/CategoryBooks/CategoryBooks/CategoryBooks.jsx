import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card";

function CategoryBooks() {
  const books = useLoaderData();

  const category = useParams();

  return (
    <div>
      <h1 className="text-4xl py-10 font-medium text-center rounded-lg bg-gray-200">
        Books Category: <span className="capitalize"> {category.category}</span>
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
        {books?.map((book) => (
          <Card book={book} key={book._id} />
        ))}
      </div>
    </div>
  );
}

export default CategoryBooks;
