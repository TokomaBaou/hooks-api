import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

export const App = () => {
  const [data, setData] = useState({ hits: [] });

  /**データ取得用の副作用フックの実装 */
  useEffect(async () => {
    const result = await axios(
      "http://hn.algolia.com/api/v1/search?query=redux"
    );
    setData(result.data);
  });

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
