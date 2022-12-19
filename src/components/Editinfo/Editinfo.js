import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const Editinfo = () => {
  const { id } = useParams();
  const [fullName, setFullName] = useState("");
  const [selects, setSelect] = useState();
  const [conditon, setCondition] = useState(false);
  const [user, setUser] = useState([]);
  const [single, setSingle] = useState({});

  let history = useNavigate();

  // Update Data and Save Again Localhost
  const updateData = (event) => {
    console.log(fullName);
    if (conditon === true && fullName.length != 0) {
      single.fullname = fullName;
      single.passion = selects;
      single.condition = conditon;
      setUser(
        user.map((ele) => {
          if (ele.id === id) {
            return {
              ...ele,
              fullname: fullName,
              passion: selects,
              condition: conditon,
            };
          }
          return ele;
        })
      );
    } else {
      alert("Please agree with to change it");
    }
    localStorage.setItem("User", JSON.stringify(user));
    history("/viewinfo");
    event.preventDefault();
  };

  // Find Data From Localhost
  useEffect(() => {
    const itemList = JSON.parse(localStorage.getItem("User"));
    setUser(itemList);
    if (itemList) {
      const newLocalUser = itemList.find((usre) => {
        return usre.userId === id;
      });
      setSingle(newLocalUser);
    } else {
      return [];
    }
  }, [id]);

  return (
    <div>
      <div className="data-box">
        <h4>Update your data</h4>
        <form onSubmit={updateData} className="data-main-box">
          <label className="labelPara" htmlFor="fullName">
            Fullname
          </label>
          <input
            defaultValue={single?.fullname}
            type="text"
            id="fullName"
            placeholder="Enter your name"
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <label className="labelPara" htmlFor="dino-select">
            Select Sectors
          </label>
          <select
            onChange={(e) => setSelect(e.target.value)}
            id="dino-select"
            required
          >
            <optgroup label="Manufacturing">
              <option>Choose your option</option>
              <option>Construction Materials</option>
              <option>Electronics And Optics</option>
            </optgroup>
            <optgroup label="Food And Beverage">
              <option>Bakery and confectionary products</option>
              <option>Beverage</option>
              <option>Fish and fish products</option>
              <option>Meat and meat products</option>
              <option>Milk and dairy products</option>
            </optgroup>
            <optgroup label="Other">
              <option>Sweets and snack food</option>
            </optgroup>
            <optgroup label="information Technology and Telecommunications">
              <option>Data processing,Web portals ,E-marketing</option>
              <option>Programming, Consultancy </option>
              <option>Fish and fish products</option>
              <option>Meat and meat products</option>
              <option>Milk and dairy products</option>
            </optgroup>
          </select>
          <div>
            <input
              onClick={(e) => setCondition(e.target.checked)}
              type="checkbox"
              style={{ width: "auto", marginRight: "12px" }}
              name="conditions"
              id="termAndCondi"
              required
            />
            <label htmlFor="termAndCondi">Are you agree to change it</label>
          </div>
          <button className="btnCmn">Update Data</button>
        </form>
        <p className="para">
          Please enter your name and pick the Sectors you are currently involved
          in.
        </p>
        <Link className="btnCmn" to={"/viewinfo"}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Editinfo;
