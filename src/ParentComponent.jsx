import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
  render() {
    // Define a prop to be passed to the child component
    const message = "Hello from Parent!";

    return (
      <div>
        <h1>Parent Component</h1>
        
        {/* Render the child component and pass the prop */}
        <ChildComponent message={message} />
      </div>
    );
  }
}

export default ParentComponent;