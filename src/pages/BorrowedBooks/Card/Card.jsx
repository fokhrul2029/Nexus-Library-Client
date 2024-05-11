function Card() {
  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img
              src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
              alt="Avatar Tailwind CSS Component"
            />
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        Borrowed Date
        <br />
        <span className="badge badge-ghost badge-sm">Return Date</span>
      </td>
      <th>
        <button className="btn btn-error">Return</button>
      </th>
    </tr>
  );
}

export default Card;
