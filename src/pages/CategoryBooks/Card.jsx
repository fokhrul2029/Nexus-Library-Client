import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Card({ book }) {
  const navigate = useNavigate();

  const { _id, author, name, category, img, rating } = book;

  const handleNavigate = (id) => {
    navigate(`/book-details/${id}`);
  };

  return (
    <div className="rounded overflow-hidden shadow-lg bg-white">
      <img
        src="https://i.ibb.co/tmnCTkx/Screenshot-44.png"
        alt="Book Name 1"
        className="w-full h-44 object-cover rounded-t-lg"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{name}</div>
        <div className="text-gray-600 text-base mb-2">By {author.name}</div>
        <div className="text-gray-600 text-base mb-2">Category: {category}</div>
        <div className="flex items-center mb-4">
          <span>Star:</span>
          <div className="text-gray-600 text-base">{rating}</div>
        </div>
        <div className="flex">
          <button
            onClick={() => handleNavigate(_id)}
            className="btn btn-primary w-full"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
