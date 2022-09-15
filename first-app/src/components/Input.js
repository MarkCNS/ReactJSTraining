import React from "react";

const Input = ({ type, id, name, placeholder, value }) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        required
      ></input>
    </div>
  );
};

export default Input;
