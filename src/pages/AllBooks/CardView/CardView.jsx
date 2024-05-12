import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

function CardView() {
  const books = useLoaderData();


  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {books?.map((book) => (
        <Card key={book._id} book={book} />
      ))}
    </div>
  );
}

export default CardView;
