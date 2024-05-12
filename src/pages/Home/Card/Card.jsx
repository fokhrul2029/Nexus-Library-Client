/* eslint-disable react/prop-types */
function Card({ category }) {
  const { category_name, image_url } = category;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="border-4">
        <img className="h-40 w-full" src={image_url} alt={category_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title"><strong className="text-gray-500 font-medium">Category:</strong> {category_name}</h2>
        <div className="card-actions">
          <button className="btn btn-primary w-full">View Books</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
