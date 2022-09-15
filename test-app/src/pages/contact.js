import React from "react";
import { useNavigate, useHistory, useLocation } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goToAbout = () => {
    navigate("/about");
  };
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h1>This a contact page</h1>
      <h2>Hello! {location.pathname.replace("/", "")} page</h2>
      <button onClick={() => goToHome()}>Go To Home Page</button>
      <button onClick={() => goToAbout()}>Go To About Page</button>
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

export default Contact;
