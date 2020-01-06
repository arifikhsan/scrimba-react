import React from 'react';

function Conditional(props) {
  return (
    <div>{props.loading ? <h1>loading...</h1> : <h1>Cool stuff</h1>}</div>
  );
}

export default Conditional;
