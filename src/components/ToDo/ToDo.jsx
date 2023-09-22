/* eslint-disable react/prop-types */
const ToDo = ({ list, handleRemove }) => {
  const todoStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
  };

  return (
    <div style={todoStyle}>
      <h2>{list}</h2>
      <button onClick={() => handleRemove(list)}>Remove</button>
    </div>
  );
};

export default ToDo;
