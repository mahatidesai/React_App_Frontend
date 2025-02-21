import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

export default function Navbar() {
  const [buttonColor, setButtonColor] = useState("black"); // Logout button color
  const [textColor, setTextColor] = useState("white"); // Logout button text color
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Check if user is logged in

  const handleMouseEnter = () => {
    setButtonColor("#F5EFEB");
    setTextColor("rgb(2, 1, 41)");
  };
  const handleMouseLeave = () => {
    setButtonColor("black");
    setTextColor("white");
  };

  // Handling successful login
  const handleLoginSuccess = (response) => {
    console.log("Login Success:", response);
    setIsLoggedIn(true);
  };

  // Handling login failure
  const handleLoginFailure = (error) => {
    console.log("Login Failed:", error);
    setIsLoggedIn(false);
  };

  // Handling logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <GoogleOAuthProvider clientId="113764442409-2mr6ppc68rb9uqnqctihrsgc64enf183.apps.googleusercontent.com">
      <div className="Navbar">
        <div className="nav-name">React-App</div>

        <div className="button-class">
          {!isLoggedIn ? (
            <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginFailure} scope="openid profile email" />
          ) : (
            <>
              <button
                className="nav-button"
                onClick={handleLogout}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  backgroundColor: buttonColor,
                  color: textColor,
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
