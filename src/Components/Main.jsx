import React from "react";

const Main = () => {
  return (
    <div>
      <center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <label for="e">Email Id: &emsp;</label>
        <input id="e" type="email" placeholder="Enter your email id"></input>
        <br></br>
        <br></br>
        <label for="p">Password: &emsp;</label>
        <input id="p" type="password" placeholder="Enter your password"></input>
        <br></br>
        <br></br>
        <button type="btn">Submit</button>
      </center>
    </div>
  );
};

export default Main;
