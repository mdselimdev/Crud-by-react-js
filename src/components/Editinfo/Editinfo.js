import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import UserInfo from "../UserInfo/UserInfo";

const Editinfo = () => {
  const { id } = useParams();
  const [fullName, setFullName] = useState("");
  const [selects, setSelect] = useState();
  const [conditon, setCondition] = useState(false);
  const [single, setSingle] = useState({});

  let history = useNavigate();

  useEffect(() => {
    const data = UserInfo.find((d) => d.id == id);
    setSingle(data);
  }, [id]);

  const updateData = (event) => {
    let a = UserInfo[id];
    a.fullname = fullName;
    a.passion = selects;
    a.condition = conditon;
    UserInfo.push(a);
    // const name = { fullname: fullName, passion: selects, condition: conditon };
    // console.log(name);
    history("/viewinfo");
    // if (name.condition === true) {
    // const data = [...alldata, name];
    // setAllData(data);
    //   UserInfo.push(name);
    //   history("/viewinfo");
    // } else {
    //   alert("Please Agree with term and condition");
    // }
    // const sutData = JSON.stringify(alldata);
    // localStorage.setItem("User", sutData);

    event.preventDefault();
  };

  return (
    <div>
      <div className="data-box">
        <h4>Update your data</h4>
        <form onSubmit={updateData} className="data-main-box">
          <label className="labelPara" htmlFor="fullName">
            Fullname
          </label>
          <input
            type="text"
            defaultValue={single.fullname}
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
            value={selects.input.value}
            required
          >
            <optgroup label="Manufacturing">
              <option selected>Choose your option</option>
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
