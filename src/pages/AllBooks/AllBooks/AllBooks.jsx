import { useState } from "react";
import TableView from "../TableView/TableView";
import CardView from "../CardView/CardView";

function AllBooks() {
  const [view, setView] = useState(true);
  const [available, setAvailable] = useState(true);
  return (
    <div>
      <h1 className="text-4xl text-center py-10 my-4 rounded-lg bg-base-200">
        All Books List
      </h1>
      <div className="flex gap-6">
        <button onClick={() => setAvailable(!available)} className="btn">{available?"Available Books": "All Books"}</button>
        <button onClick={() => setView(!view)} className="btn ">
          Change into {view ? "Card View" : "Table View"}
        </button>
      </div>
      <div className="py-6">{view ? <TableView available={available} /> : <CardView available={available} />}</div>
    </div>
  );
}

export default AllBooks;
