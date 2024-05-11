import Card from "../Card/Card";

function BorrowedBooks() {
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
              <Card />
              <Card />
              <Card />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BorrowedBooks;
