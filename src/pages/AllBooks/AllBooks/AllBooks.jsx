import { useEffect, useState } from "react";
import TableView from "../TableView/TableView";
import CardView from "../CardView/CardView";
import axios from "axios";
import Search from "../Search/Search";

function AllBooks() {
  const [view, setView] = useState(true);
  const [available, setAvailable] = useState(true);
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState(null);

  const handleSearchChange = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    axios
      .get("https://b9-a11-jwt-battlefield-backend.vercel.app/all-books", { withCredentials: true })
      .then((res) => {
        setBooks(res.data);
        if (search.length > 0) {
          const newData = res.data.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          );
          setBooks(newData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);
  return (
    <div>
      <h1 className="text-4xl text-center py-10 my-4 rounded-lg bg-base-200">
        All Books List
      </h1>
      <div className="flex gap-6 justify-between">
        <div className="space-x-6">
          <button onClick={() => setAvailable(!available)} className="btn">
            {available ? "Available Books" : "All Books"}
          </button>
          <button onClick={() => setView(!view)} className="btn ">
            Change into {view ? "Card View" : "Table View"}
          </button>
        </div>
        <Search onSearchChange={handleSearchChange} />
      </div>
      <div className="py-6">
        {view ? (
          <TableView available={available} books={books} />
        ) : (
          <CardView available={available} books={books} />
        )}
      </div>
    </div>
  );
}

export default AllBooks;
