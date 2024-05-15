import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function Footer() {
  const links = (
    <>
      <li className="link hover:text-blue-500 ">
        <Link to="/">Home</Link>
      </li>
      <li className="link hover:text-blue-500 ">
        <Link to="/add-book">Add Book</Link>
      </li>
      <li className="link hover:text-blue-500 ">
        <Link to="/all-books">All Books</Link>
      </li>
      <li className="link hover:text-blue-500 ">
        <Link to="/borrowed-books">Borrowed Books</Link>
      </li>
    </>
  );
  return (
    <div className="bg-gray-900 mt-10 text-white">
      <footer className="footer p-6 py-20 text-gray-content">
        <Link to="/">
          <Logo />
        </Link>
        <nav>
          <h6 className="footer-title text-base">Pages</h6>
          <ul className="grid grid-flow-col gap-4 text-xl">{links}</ul>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
