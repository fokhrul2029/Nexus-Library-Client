import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextApi/AuthProvider";
import axios from "axios";
import swal from "sweetalert";

function Update() {
  const { user } = useContext(AuthContext);
  const book = useLoaderData();

  const {
    _id,
    name: bookName,
    author: authorInfo,
    category: bookCategory,
    rating: booksRating,
    img: image,
    description: des,
    quantity: booksQuantity,
  } = book;

  const [name, setName] = useState(bookName);
  const [quantity, setQuantity] = useState(booksQuantity);
  const [author, setAuthor] = useState(authorInfo?.name);
  const [category, setCategory] = useState(bookCategory);
  const [description, setDescription] = useState(des);
  const [rating, setRating] = useState(booksRating);
  const [img, setImg] = useState(image);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookInfo = {
      author: {
        email: user.email,
        name: author,
      },
      name,
      quantity: parseInt(quantity),
      category,
      rating: parseInt(rating),
      img,
      description,
    };

    console.log(bookInfo);

    axios
      .put(`http://localhost:3000/update/${_id}`, { bookInfo })
      .then((res) => {
        console.log(res);
        swal({
          title: "Update Success!",
          icon: "success",
        });
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
        swal({
          title: "Request Failed!",
          text: "Something went wrong. Try later!",
          icon: "warning",
        });
        navigate(-1);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" w-full p-6 bg-base-300 shadow-md rounded-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Update Book
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <input
                type="number"
                className="input input-bordered w-full"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Author
              </label>
              <input
                type="text"
                className="input input-bordered w-full  font-bold"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                disabled
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                className="input input-bordered w-full"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option className="text-gray-400" value="" disabled selected>
                  Select an option
                </option>
                <option value="business">Business</option>
                <option value="travel">Travel</option>
                <option value="psychology">Psychology</option>
                <option value="fantasy">Fantasy</option>
                <option value="novel">Novel</option>
                <option value="history">History</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <input
                type="number"
                min="1"
                max="5"
                className="input input-bordered w-full"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full py-3 rounded-lg"
          >
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;
