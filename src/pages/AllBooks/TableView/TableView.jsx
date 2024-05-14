import Row from "../Row/Row";
import { useEffect, useState } from "react";
import axios from "axios";

function TableView() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://b9-a11-jwt-battlefield-backend.vercel.app/all-books", { withCredentials: true })
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
          {books?.map((book) => (
            <Row key={book._id} book={book} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableView;
