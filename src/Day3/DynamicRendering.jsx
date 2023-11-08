import React, { useState } from "react";

const DynamicRendering = () => {
  const [selectedFramework, setSelectedFramerwork] = useState(-1);
  const arr = [
    "ReactJS",
    "AngularJS",
    "VueJS",
    "NextJS",
    "JavaScript",
    "NextJS",
  ];
  return (
    <>
      <h1 className="text-2xl font-bold">
        Clicked FrameWork {selectedFramework}
      </h1>
      <ul>
        {arr.map((element, index) => (
          <li
            className="my-4 px-4 border-2 rounded-lg"
            key={index}
            onClick={() => {
              setSelectedFramerwork(index);
            }}
          >
            {element}
          </li>
        ))}
      </ul>
    </>
  );
};

export default DynamicRendering;
