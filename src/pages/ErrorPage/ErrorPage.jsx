import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <span className="text-6xl">🙁</span>
          <h1 className="mt-4 text-3xl font-bold text-gray-900">Error 404</h1>
          <p className="mt-2 text-sm text-gray-500">Oops! Page not found.</p>
          <div className="mt-6">
            <Link to="/" className="inline-block">
              <button size="large">Go back to home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
