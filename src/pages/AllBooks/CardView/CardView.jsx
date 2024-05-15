import axios from "axios";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

function CardView() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/all-books", { withCredentials: true })
      .then((res) => {
        setBooks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {books?.map((book) => (
        <Card key={book._id} book={book} />
      ))}
    </div>
  );
}

export default CardView;
