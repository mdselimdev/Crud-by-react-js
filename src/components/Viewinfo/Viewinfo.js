import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Viewinfo = () => {
  const [userData, setUserData] = useState([]);

  let history = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("User");
    const d = JSON.parse(data);
    console.log(d);
    setUserData(d);
  }, []);

  const handleDelete = (id) => {
    let index = userData;
    delete [index.id];

    history("/viewinfo");
  };

  return (
    <div className="p-5">
      <div className="d-flex align-items-center">
        <div style={{ width: "30%" }}>
          <Button variant="primary">
            <Link className="text-white" to={`/`}>
              Back Home
            </Link>
          </Button>{" "}
        </div>
        <div style={{ width: "70%", marginLeft: "162px" }}>
          <h1 className="text-left py-5">Stored Information</h1>
        </div>
      </div>

      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
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
                <tr key={data.id}>
                  <td>{data.fullname}</td>
                  <td>{data.passion}</td>
                  <td>{data.condition && "True"}</td>
                  <td>
                    <Button variant="primary">
                      <Link className="text-white" to={`/viewinfo/${data.id}`}>
                        Edit
                      </Link>
                    </Button>{" "}
                    &nbsp;{" "}
                    <Button
                      variant="primary"
                      onClick={() => handleDelete(data.id)}
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
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Viewinfo;
