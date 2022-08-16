import React from "react";
import "./Switch.css";

export {};

const Switch = ({ isOn, handleToggle }: { isOn: any; handleToggle: any }) => {
  
  return (
    <div className="container">
      
      <input
        className="react-switch-checkbox"
        checked={isOn}
        onChange={handleToggle}
        id={`react-switch-new`}
        type="checkbox"
      />
   
      <label
        style={{ background: isOn && "green", margin: "auto" }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
      </div>
    
  );
};
export default Switch;
