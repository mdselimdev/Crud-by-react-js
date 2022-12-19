import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Viewinfo = () => {
  const [userData, setUserData] = useState([]);

  // Data Load from local host
  useEffect(() => {
    const data = localStorage.getItem("User");
    const d = JSON.parse(data);
    setUserData(d);
  }, []);

  // Delter Data Option Code
  const handleDelete = (id) => {
    const d = userData.filter((u) => u.userId !== id);
    setUserData(d);
    localStorage.setItem("User", JSON.stringify(d));
  };

  return (
    <div className="p-5">
      <div className="d-flex align-items-center">
        <div style={{ width: "30%" }}>
          <Link to={`/`}>
            <Button variant="primary" className="text-white">
              Back Home
            </Button>
          </Link>{" "}
        </div>
        <div style={{ width: "70%", marginLeft: "162px" }}>
          <h1 className="text-left py-5">Stored Information</h1>
        </div>
      </div>

      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <th>Id Number</th>
            <th>Name</th>
            <th>Selected Sector</th>
            <th>Term & condition</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {userData && userData.length > 0 ? (
            userData.map((data) => {
              return (
                <tr key={data.userId}>
                  <td>{data.userId}</td>
                  <td>{data.fullname}</td>
                  <td>{data.passion}</td>
                  <td>{data.condition && "True"}</td>
                  <td>
                    <Link to={`/viewinfo/${data.userId}`}>
                      <Button className="text-white" variant="primary">
                        Edit
                      </Button>
                    </Link>{" "}
                    &nbsp;{" "}
                    <Button
                      variant="primary"
                      onClick={() => handleDelete(data.userId)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr className="text-center text-primary">
              <td>There is no data</td>
              <td>There is no data</td>
              <td>There is no data</td>
              <td>There is no data</td>
              <td>There is no data</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Viewinfo;
