import React from "react";

const Main = () => {
  return (
    <div>
      <center>
        <br></br>
        <br></br>
        <br></br>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ832M5HMrevQNzF8Yn5VEn6RhghY44kaQF9Q&usqp=CAU"
          alt="Not found"
          width="200"
          height="200"
        ></img>
        <br></br>
        <br></br>
        <label for="e">Email Id: &emsp;</label>
        <input
          id="e"
          type="email"
          placeholder="Enter your email id"
          name="email"
        ></input>
        <br></br>
        <br></br>
        <label for="p">Password: &emsp;</label>
        <input id="p" type="password" placeholder="Enter your password"></input>
        <br></br>
        <br></br>
        <button type="btn" value="Submit">
          Submit
        </button>
      </center>
    </div>
  );
};

export default Main;
