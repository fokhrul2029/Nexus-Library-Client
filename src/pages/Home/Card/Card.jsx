function Card() {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="border-4">
        <img
          className="h-40 w-full"
          src="https://i.ibb.co/7RJyLHh/OIP.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Book Category Names</h2>
        <div className="card-actions">
          <button className="btn btn-primary w-full">View Books</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
