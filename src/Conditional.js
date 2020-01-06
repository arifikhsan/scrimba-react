import React from 'react';

function Conditional(props) {
  if (props.loading) {
    return <h1>loading...</h1>;
  } else {
    return <h1>Some cool stuff about conditional rendering</h1>;
  }
}

export default Conditional;
