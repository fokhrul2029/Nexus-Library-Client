/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AuthContext } from "../../contextApi/AuthProvider";
import swal from "sweetalert";
import axios from "axios";

function Modal({ book }) {
  const { user } = useContext(AuthContext);
  const [name] = useState(user.displayName);
  const [email] = useState(user.email);
  const [returnDate, setReturnDate] = useState(null);

  const date = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    // Format the date as YYYY-MM-DD
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  const handleForm = () => {
    const borrowInfo = {
      name,
      email,
      borrowDate: date(),
      returnDate,
      bookInfo: book,
    };
    if (returnDate > date()) {
      console.log("True");
    } else {
      swal({
        title: "Invalid Date!",
        text: "Use a valid Date to return!",
        icon: "warning",
      });
      return false;
    }
    console.log(borrowInfo);
    axios
      .patch("http://localhost:3000/borrowed", { borrowInfo })
      .then((res) => {
        console.log(res);
        swal({
          title: "Request Confirmed!",
          text: "You have successfully borrowed the book",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="modal-box  w-11/12 md:w-[500px]">
      <h1 className="text-center text-3xl font-semibold">Borrow Info</h1>
      <div className="grid gap-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Return Date</span>
          </label>
          <input
            type="date"
            placeholder="Return Date"
            className="input input-bordered"
            required
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered"
            value={name}
            required
            disabled
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered"
            value={email}
            required
            disabled
          />
        </div>
      </div>
      <div className="modal-action">
        <form method="dialog">
          <div className="flex gap-2">
            <button
              onClick={handleForm}
              type="submit"
              className="btn btn-accent"
            >
              Borrow
            </button>
            <button className="btn btn-warning">Close</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;