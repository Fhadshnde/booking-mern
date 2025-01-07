import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
<<<<<<< HEAD
          <span className="logo">fhadbooking</span>
=======
          <span className="logo">lamabooking</span>
>>>>>>> e0b9deaf1f86d0fa79c4cf360b9ec2387c33ef63
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Register</button>
<<<<<<< HEAD
            <button className="navButton">
              <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
              Login
              </Link>
            </button>
=======
            <button className="navButton">Login</button>
>>>>>>> e0b9deaf1f86d0fa79c4cf360b9ec2387c33ef63
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
