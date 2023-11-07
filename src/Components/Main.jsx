import React from "react";

const Main = () => {
  return (
    <div>
      <label for="name">Email Id: &emsp;</label>
      <input id="name" type="box" placeholder="Email ID"></input>
      <br></br>
      <label for="na">Password: &emsp;</label>
      <input id="na" type="box" placeholder="Password"></input>
      <br></br>
      <button type="btn">Submit</button>
    </div>
  );
};

export default Main;
