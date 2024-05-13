import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Row({ book }) {
  const navigate = useNavigate();

  const { _id, author, name, img, category, rating } = book;
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
        {category}
        <br />
        <span className="badge badge-ghost badge-sm">{rating}</span>
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
