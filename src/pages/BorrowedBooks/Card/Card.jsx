/* eslint-disable react/prop-types */

import swal from "sweetalert";

function Card({ book }) {
  const { _id, borrowDate, returnDate, bookInfo } = book;

  const handleReturn = (id) => {
    swal({
      title: "Are you sure to Return the book?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        //  Code here to return book

        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary book is safe!");
      }
    });
  };

  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={bookInfo.img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{bookInfo.name}</div>
            <div className="text-sm opacity-50">{bookInfo.category}</div>
          </div>
        </div>
      </td>
      <td>
        {borrowDate}
        <br />
        <span className="badge badge-ghost badge-sm">{returnDate}</span>
      </td>
      <th>
        <button onClick={() => handleReturn(_id)} className="btn btn-error">
          Return
        </button>
      </th>
    </tr>
  );
}

export default Card;
