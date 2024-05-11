import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";
import AddBook from "../pages/AddBook/AddBook";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllBooks from "../pages/AllBooks/AllBooks/AllBooks";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks/BorrowedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/borrowed-books",
        element: <BorrowedBooks />,
      },
    ],
  },
]);

export default router;
