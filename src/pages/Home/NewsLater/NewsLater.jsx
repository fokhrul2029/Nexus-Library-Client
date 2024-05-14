import swal from "sweetalert";

function NewsLater() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscription success!");
    swal({
      title: "Great!",
      text: "Newsletter Subscription Success!",
      icon: "success",
    });
  };

  return (
    <div className="py-14">
      <div className="hero relative bg-[url(https://i.ibb.co/tmnCTkx/Screenshot-44.png)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="hero-content flex justify-center items-center text-center text-white py-10 my-10 px-10">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold pb-6">Stay Updated!</h1>
              <p className="text-lg mb-8 lg:pr-10">
                Sign up for our newsletter to receive the latest book releases,
                recommendations, and exclusive offers.
              </p>
            </div>
            <form onSubmit={handleSubscribe}>
              <div className="flex items-center justify-center">
                <input
                  type="email"
                  className="rounded-l-full py-3 px-4 w-full md:w-auto text-black bg-white focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-r-full transition duration-300 ease-in-out"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLater;
