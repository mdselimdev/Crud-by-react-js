import React, { useEffect, useState } from "react";

const ViewinfoSingle = () => {
  const [man, setMan] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((d) => setMan(d))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <tr>
      {man.map((d) => (
        <>
          <td>{d.name}</td>
          <td>{d.email}</td>
          <td>{d.id}</td>
        </>
      ))}
    </tr>
  );
};

export default ViewinfoSingle;
