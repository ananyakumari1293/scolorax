import "./Auth.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import {
  auth,
  googleProvider,
} from "../firebase";

function Auth() {

  const [isLogin, setIsLogin] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // EMAIL/PASSWORD AUTH
  const handleAuth = async () => {

    try {

      if (isLogin) {

        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      } else {

        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      }

      navigate("/dashboard");

    } catch (error) {

      alert(error.message);

    }
  };

  // GOOGLE AUTH
  const handleGoogleLogin = async () => {

    try {

      await signInWithPopup(
        auth,
        googleProvider
      );

      navigate("/dashboard");

    } catch (error) {

      alert(error.message);

    }
  };

  return (
    <div className="auth-page">

      {/* LEFT SIDE */}
      <div className="auth-left">

        <div className="auth-overlay">

          <p className="auth-small-text">
            Welcome to ScoloraX
          </p>

          <h1>
            Scholarships,
            simplified for students.
          </h1>

          <p className="auth-description">
            Discover curated scholarships,
            funding opportunities,
            and degree-specific resources
            without endlessly searching
            across multiple websites.
          </p>

          <div className="auth-points">

            <div>
              ✓ Curated scholarship opportunities
            </div>

            <div>
              ✓ Degree-specific recommendations
            </div>

            <div>
              ✓ Save and track scholarships
            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="auth-right">

        <div className="auth-card">

          <h2>

            {isLogin
              ? "Welcome Back"
              : "Create your account"}

          </h2>

          <p className="auth-subtitle">

            {isLogin
              ? "Login to continue exploring scholarships."
              : "Start exploring scholarships smarter."}

          </p>

          <form className="auth-form">

            {!isLogin && (
              <div className="name-fields">

                <input
                  type="text"
                  placeholder="First Name"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                />

              </div>
            )}

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            {!isLogin && (
              <>

                <select>

                  <option>
                    Select Degree
                  </option>

                  <option>
                    Bachelor of Technology
                  </option>

                  <option>
                    Master of Technology
                  </option>

                  <option>
                    MBA
                  </option>

                  <option>
                    MCA
                  </option>

                  <option>
                    BCA
                  </option>

                  <option>
                    BBA
                  </option>

                  <option>
                    BSc
                  </option>

                  <option>
                    MSc
                  </option>

                </select>

                <select>

                  <option>
                    Gender
                  </option>

                  <option>
                    Male
                  </option>

                  <option>
                    Female
                  </option>

                  <option>
                    Other
                  </option>

                </select>

              </>
            )}

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
              />
            )}

            <button
              type="button"
              onClick={handleAuth}
            >

              {isLogin
                ? "Login"
                : "Create Account"}

            </button>

          </form>

          <div className="divider">

            <span>
              OR
            </span>

          </div>

          <button
            className="google-btn"
            onClick={handleGoogleLogin}
          >
            Continue with Google
          </button>

          <p className="login-text">

            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <span
              onClick={() =>
                setIsLogin(!isLogin)
              }
            >

              {isLogin
                ? "Create Account"
                : "Login"}

            </span>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Auth;