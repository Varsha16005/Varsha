// npm i styled-components

import styled from "styled-components";

// Styled Component
const Button = styled.button`
  background-color: red;
  color: white;
  &:hover {
    background-color: yellow;
  }
`;

const TeaNavbar = ({ handleChangeCategory }) => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      <Button onClick={() => handleChangeCategory(0)}>Tea</Button>
      <button onClick={() => handleChangeCategory(1)}>Coffee</button>
    </div>
  );
};

export default TeaNavbar;
