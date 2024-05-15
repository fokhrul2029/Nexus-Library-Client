/* eslint-disable react/prop-types */
import Row from "../Row/Row";
import { useEffect, useState } from "react";
import axios from "axios";

function TableView({ available }) {
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
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Books Image</th>
            <th>Books Name and Author</th>
            <th>Categories and Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book) =>
            available ? (
              <Row key={book._id} book={book} />
            ) : (
              book.quantity > 0 && <Row key={book._id} book={book} />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableView;
