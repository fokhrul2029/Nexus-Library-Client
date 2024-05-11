import Row from "../Row/Row";

function TableView() {
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
          <Row />
          <Row />
          <Row />
          <Row />
        </tbody>
      </table>
    </div>
  );
}

export default TableView;
