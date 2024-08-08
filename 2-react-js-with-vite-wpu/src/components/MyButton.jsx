/* eslint-disable react/prop-types */
function MyButton({ text, onClick, disabled }) {
  const myStyle = text !== "Reset!" ? {} : { margin: 20, display: "block" };

  return (
    <button onClick={onClick} style={myStyle} disabled={disabled}>
      {text}
    </button>
  );
}

export default MyButton;
