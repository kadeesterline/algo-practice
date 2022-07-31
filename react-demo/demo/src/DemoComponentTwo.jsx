import React from "react";

function DemoComponentOne(props) {
  return (
    <div>
      <h1>{props.data.title}</h1>
      <p>{props.data.userId}</p>
    </div>
  );
}

export default DemoComponentOne;
