import React from 'react';

class ChildComponent extends React.Component {
  render() {
    // Access the prop passed from the parent component
    const { message } = this.props;

    return (
      <div>
        <h2>Child Component</h2>
        <p>Received from parent: {message}</p>
      </div>
    );
  }
}

export default ChildComponent;