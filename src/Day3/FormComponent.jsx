import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormComponent = () => {
  const [name, setName] = useState("Hello");
  const notify = () => toast("Form Submitted");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        notify();
        console.log(name);
      }}
    >
      <label htmlFor="userName"></label>
      <input
        type="text"
        id="userName"
        value={name} // Two way data binding
        className="outline-2 border-2 px-4 py-2"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="submit"
        value="Submit Form"
        className="ms-4 px-4 py-2 bg-fuchsia-400 font-medium"
      />
      <ToastContainer />
    </form>
  );
};

export default FormComponent;
