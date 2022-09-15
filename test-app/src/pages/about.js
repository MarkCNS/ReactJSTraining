import React from "react";
import { useNavigate, useHistory, useLocation } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goToHome = () => {
    navigate("/");
  };
  const goToContact = () => {
    navigate("/contact");
  };
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h1>This is an about page</h1>
      <h2>Hello! {location.pathname.replace("/", "")} page</h2>
      {location.pathname === "/about/mark" ? (
        <p>Hi! Mark. Welcome to your files</p>
      ) : (
        <p>Login to see your files</p>
      )}
      <button onClick={() => goToHome()}>Go To Home Page</button>
      <button onClick={() => goToContact()}>Go To Contact Page</button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default About;
