import { useState } from "react";
import TableView from "../TableView/TableView";
import CardView from "../CardView/CardView";

function BorrowedBooks() {
  const [view, setView] = useState(true);
  return (
    <div>
      <h1 className="text-4xl text-center py-10 my-4 rounded-lg bg-base-200">
        This is Borrowed Books
      </h1>
      <button onClick={() => setView(!view)} className="btn ">
        Change View to {view ? "Card View" : "Table View"}
      </button>
      <div className="py-6">{view ? <TableView /> : <CardView />}</div>
    </div>
  );
}

export default BorrowedBooks;
