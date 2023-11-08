const Buttons = (props) => {
  return (
    <button className={`px-4 py-2 bg-${props.color}-500 rounded-lg`}>
      {props.label}
      {props.children}
    </button>
  );
};
export default Buttons;
