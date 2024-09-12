import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Sign In</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
};

export default Navbar;
