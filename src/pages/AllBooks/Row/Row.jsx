import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Row({ book }) {
  const navigate = useNavigate();

  const { _id, author, name, img, category, rating } = book;

  const renderStar = () => {
    let stars = [];
    for (let i = 0; rating > i; i++) {
      stars.push(<FaStar key={i} />);
    }
    return stars;
  };

  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{author.name}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex gap-1 items-center">
          <span className="font-bold">Category: </span>
          <p>{category}</p>
        </div>
        <br />
        <div className="flex items-center gap-1">
          <span className="font-bold">Rating: </span>
          <p className="flex text-yellow-500 items-center">{renderStar()}</p>
        </div>
      </td>
      <th>
        <button
          onClick={() => navigate(`/update/${_id}`)}
          className="btn btn-accent"
        >
          Update
        </button>
      </th>
    </tr>
  );
}

export default Row;
