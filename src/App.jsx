import "./styles.css";
import { useState } from "react";

export const App = () => {
  const [data, setData] = useState({ hits: [] });

  return (
    <div className="App">
      Hooks API
      {data.hits.map((item) => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </div>
  );
};
