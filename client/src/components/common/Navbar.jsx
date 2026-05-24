import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  return (
    <nav className="navbar">

      {/* LEFT */}
      <div
        className="navbar-logo"
        onClick={() => navigate("/")}
      >
        <div className="logo-box">S</div>

        <h2>
          Scolora<span>X</span>
        </h2>
      </div>

      {/* CENTER */}
      <div className="navbar-links">

        <p onClick={() => navigate("/auth")}>
          Scholarships
        </p>

        <p onClick={() => navigate("/auth")}>
          Degrees
        </p>

        <p>
          About
        </p>

      </div>

      {/* RIGHT */}
      <div className="navbar-buttons">

        <button
          className="login-btn"
          onClick={() => navigate("/auth")}
        >
          Login
        </button>

        <button
          className="started-btn"
          onClick={() => navigate("/auth")}
        >
          Get Started
        </button>

      </div>

    </nav>
  );
}

export default Navbar;