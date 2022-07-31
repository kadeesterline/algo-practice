import React from "react";

function DemoComponentOne({ data }) {
  const { title, userId } = data;
  return (
    <div>
      <h1>{title}</h1>
      <p>{userId}</p>
    </div>
  );
}

export default DemoComponentOne;
