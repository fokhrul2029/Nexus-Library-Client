import axios from "axios";
import Card from "../Card/Card";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contextApi/AuthProvider";

function BorrowedBooks() {
  const { user } = useContext(AuthContext);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const url = `https://b9-a11-jwt-battlefield-backend.vercel.app/borrowed-books?email=${user.email}`;

  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      .then((res) => {
        setBorrowedBooks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);
  return (
    <div>
      <h1 className="text-4xl text-center py-10 my-4 rounded-lg bg-base-200">
        This is Borrowed Books
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Name and Categories</th>
                <th>Borrowed and Return Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {borrowedBooks?.map((book) => (
                <Card key={book._id} book={book} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BorrowedBooks;
