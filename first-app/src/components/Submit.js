const Submit = ({ type, handleClick, title }) => {
  return (
    <div>
      <button type={type} className="submit" onClick={handleClick}>
        {title}
      </button>
    </div>
  );
};

export default Submit;

// <input type="submit" value="Submit" className="submit" />
