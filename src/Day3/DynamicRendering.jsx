import React, { useState } from "react";

const DynamicRendering = () => {
  // const [one, two] = [1, 2];
  // let clickedFramework = -1; // has a scope
  const [selectedFramework, setSelectedFramerwork] = useState(-1);
  // 0 -> The variable
  // 1 -> Updater function
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
