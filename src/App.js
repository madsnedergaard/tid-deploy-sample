import React, { useState } from "react";
import "./App.css";
import { Header } from "./Header";

const Option = ({ name, selected, onSelect }) => {
  return (
    <div>
      <input
        id={name}
        type="checkbox"
        checked={selected === name}
        onChange={onSelect}
      />
      <label for={name}>{name}</label>
    </div>
  );
};

const RadioCheckboxes = () => {
  const [selected, setSelected] = useState();

  const handleChange = (event) => {
    setSelected(event.target.id);
  };

  return (
    <div>
      <Header />
      Pick an option:
      <div className="options">
        <Option name="Vegan" onSelect={handleChange} selected={selected} />
        <Option name="Vegetarian" onSelect={handleChange} selected={selected} />
        <Option name="Omnivore" onSelect={handleChange} selected={selected} />
      </div>
      <h3>User picked: {selected}</h3>
    </div>
  );
};

export default RadioCheckboxes;
