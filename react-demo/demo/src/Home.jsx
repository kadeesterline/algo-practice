import { React, useEffect, useState } from "react";
import DemoComponentOne from "./DemoComponentOne";
import DemoComponentTwo from "./DemoComponentTwo";

function Home() {
  const [toDo, setToDo] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setToDo(json));
  }, []);
  return (
    <div>
      <DemoComponentOne data={toDo} />
      <DemoComponentTwo data={toDo} />
    </div>
  );
}

export default Home;
