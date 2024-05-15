import { useNavigate, useParams } from "react-router-dom";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa6";

function BookDetails() {
  const bookId = useParams();
  const navigate = useNavigate();
  // const [counter, setCounter] = useState(0);
  const [book, setBook] = useState({});
  const { id } = bookId;
  const { name, img, category, quantity, rating, description } = book;

  const bookUrl = `http://localhost:3000/all-books/${id}`;
  useEffect(() => {
    axios
      .get(bookUrl, { withCredentials: true })
      .then((res) => {
        setBook(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [bookUrl]);

  const renderStar = () => {
    let stars = [];
    for (let i = 0; rating > i; i++) {
      stars.push(<FaStar key={i} />);
    }
    return stars;
  };

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-4xl shadow-md rounded-lg overflow-hidden w-full">
        <div className="md:flex">
          <div className="md:w-1/2 p-4 relative overflow-hidden">
            <img
              src={img}
              alt={name}
              className="w-full h-auto object-cover rounded-lg transition-transform duration-500 transform hover:scale-110"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-30 transition-opacity duration-500"></div>
          </div>
          <div className="md:w-1/2 p-6">
            <div className="text-gray-800">
              <h2 className="text-3xl font-semibold mb-2">{name}</h2>
              <p className="text-gray-600 mb-2">Category: {category}</p>
              <p className="text-gray-600 mb-2">Quantity: {quantity}</p>
              <div className="flex gap-2 items-center">
                <span>Rating: </span>
                <p className="text-yellow-500 flex gap-1 items-center">
                  {renderStar()}
                </p>
              </div>

              <p className="text-gray-600 mb-6">{description}</p>
              <div className="flex gap-2 items-center">
                <button onClick={() => navigate(-1)} className="btn btn-info">
                  Back
                </button>
                <button
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                  className="btn btn-accent"
                >
                  Borrow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <dialog id="my_modal_4" className="modal">
        <Modal book={book} />
      </dialog>
    </div>
  );
}

export default BookDetails;
