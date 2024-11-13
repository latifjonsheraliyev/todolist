import React, { useState, useEffect } from "react";
import FormsItem from "./forms-item";
import "./style.css";

const Forms = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("users");
    if (storedData) {
      setData(JSON.parse(storedData)); 
    }
  }, []);

  const submit = (e) => {
    e.preventDefault();
    let person = {
      id: Date.now(),
      name,
      age,
    };
    
    setData((prevData) => {
      const newData = [...prevData, person];
      localStorage.setItem("users", JSON.stringify(newData));
      return newData;
    });

 
  };

  return (
    <div className="main">
      <form onSubmit={submit}>
        <br />
        <div className="inputflex">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Name"
          />
          <br />
          <input
            onChange={(e) => setAge(e.target.value)}
            value={age}
            type="number"
            placeholder="Age"
          />
        </div>
        <br />
        <button>Send</button>
      </form>
      <br />
      <br />

      <div className="information">
        
        {data.map((value) => (
          <div className="informationflex" key={value.id}>
            <FormsItem value={value} />
        <br />
            <button
              className="delete"
              onClick={() => {
                const filteredData = data.filter((item) => item.id !== value.id);
                setData(filteredData);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forms;
