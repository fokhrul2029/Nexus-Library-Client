function Card() {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-44 w-full"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Book Title</h2>
        <p>Category</p>
        <div>
          <strong>Author: </strong>
          <span>Fokhrul</span>
        </div>
        <div className="card-actions justify-between items-center">
          <div className="">Rating</div>
          <btn className="btn btn-accent">Update</btn>
        </div>
      </div>
    </div>
  );
}

export default Card;
