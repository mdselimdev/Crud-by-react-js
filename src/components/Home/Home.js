import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [fullName, setFullName] = useState("");
  const [selects, setSelect] = useState();
  const [conditon, setCondition] = useState(false);
  const [userId, setUserId] = useState(1);
  const [alldata, setAllData] = useState([]);
  const { reset } = useForm();
  let history = useNavigate();

  useEffect(() => {
    const d = localStorage.getItem("User");
    const user = JSON.parse(d);
    console.log(user);
    let id = user.length;
    setUserId(id + 1);
  }, []);

  const addData = (event) => {
    if (!fullName) {
      return;
    } else {
      const name = {
        id: userId,
        fullname: fullName,
        passion: selects,
        condition: conditon,
      };
      if (name.condition === true) {
        // const data = alldata.push(name);
        setAllData([alldata, ...name]);
        // console.log(data);
        const sutData = JSON.stringify(alldata);
        localStorage.setItem("User", sutData);
        history("/viewinfo");
      } else {
        alert("Please Agree with term and condition");
      }
    }

    reset();
    event.preventDefault();
  };

  return (
    <div>
      <div className="data-box">
        <h4>Welcome to challengers home</h4>
        <form onSubmit={addData} className="data-main-box">
          <label className="labelPara" htmlFor="fullName">
            Fullname
          </label>
          <input
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
            value={selects}
            onChange={(e) => setSelect(e.target.value)}
            id="dino-select"
            required
          >
            <optgroup label="Manufacturing">
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
            <label htmlFor="termAndCondi">
              I accept all term and conditions
            </label>
          </div>
          <button className="btnCmn">Save Data</button>
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

export default Home;
