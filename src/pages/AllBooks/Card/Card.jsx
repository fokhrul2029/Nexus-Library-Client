import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Card({ book }) {
  const { _id, author, name, img, category, rating } = book;

  const navigate = useNavigate();

  const renderStar = () => {
    let stars = [];
    for (let i = 0; rating > i; i++) {
      stars.push(<FaStar key={i} />);
    }
    return stars;
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="h-44 w-full" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex gap-2 items-center">
          <span className="font-bold">Category: </span>
          <p>{category}</p>
        </div>
        <div>
          <strong>Author: </strong>
          <span>{author.name}</span>
        </div>
        <div className="card-actions justify-between items-center">
          <div className="flex gap-2 items-center">
            <span>Rating</span>
            <p className="flex text-yellow-500">{renderStar()}</p>
          </div>
          <btn
            onClick={() => navigate(`/update/${_id}`)}
            className="btn btn-accent"
          >
            Update
          </btn>
        </div>
      </div>
    </div>
  );
}

export default Card;
