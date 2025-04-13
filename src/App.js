import React from 'react';
import PropTypes from 'prop-types';

function App({ name, using, status, propArr, customObject }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{using ? 'Used here' : 'Not used here'}</p>
      <p>Status: {status === "Open" ? "Open!" : "Closed"}</p>
      <p>Array Example: {propArr.join(', ')}</p>
      <p>Custom Object Example: {customObject.key}</p>
    </div>
  );
}


App.propTypes = {
  name: PropTypes.string.isRequired,
  
  using: PropTypes.bool.isRequired,
  
  status: PropTypes.oneOf(["Open", "Closed"]).isRequired,
  
  propArr: PropTypes.arrayOf(PropTypes.string).isRequired,

  customObject: PropTypes.shape({
    key: PropTypes.string.isRequired
  }).isRequired,

  anyProp: PropTypes.any
};

ReactDOM.render(
  <App
    name="React"
    using={true}
    status="Open"
    propArr={["React", "Vue", "Angular"]}
    customObject={{ key: "value" }}
    anyProp={42} 
  />,
  document.getElementById("root")
);
