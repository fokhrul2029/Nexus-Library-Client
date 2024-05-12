/* eslint-disable react/prop-types */
function Card({ book }) {
  const { author, name, img, category, rating } = book;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="h-44 w-full" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{category}</p>
        <div>
          <strong>Author: </strong>
          <span>{author.name}</span>
        </div>
        <div className="card-actions justify-between items-center">
          <div className="">{rating}</div>
          <btn className="btn btn-accent">Update</btn>
        </div>
      </div>
    </div>
  );
}

export default Card;
