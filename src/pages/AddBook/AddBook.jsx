import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../contextApi/AuthProvider";
import swal from "sweetalert";

const AddBook = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [author, setAuthor] = useState(user?.displayName);
  const [category, setCategory] = useState(null);
  const [description, setDescription] = useState(null);
  const [rating, setRating] = useState(1);
  const [img, setImg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookInfo = {
      author: {
        email: user.email,
        name: author,
      },
      name,
      quantity,
      category,
      rating,
      img,
      description,
    };
    console.log(bookInfo);

    axios
      .post("http://localhost:3000/add-book", {
        bookInfo,
      })
      .then((res) => {
        console.log(res);
        swal({
          title: "Good job!",
          text: "Book Added success!",
          icon: "success",
        });
      })
      .catch((error) => {
        console.error(error);
        swal({
          title: "Request failed!",
          text: "Something went wrong. Try Later!",
          icon: "success",
        });
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" w-full p-6 bg-base-300 shadow-md rounded-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Add Book
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
            Add
          </button>
        </form>
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            About the Book
          </h2>
          <p className="text-gray-700">
            Feel free to add the information or details about the book here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
