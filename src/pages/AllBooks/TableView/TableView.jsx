import { useLoaderData } from "react-router-dom";
import Row from "../Row/Row";

function TableView() {
  const books = useLoaderData();

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
