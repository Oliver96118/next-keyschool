import React from "react";

const Select = ({ id, list, cur, onChange }) => {
  return (
    <div>
      {/* {console.log(list)} */
      console.log("select render")}
      <select id={id} defaultValue={cur-1} className="w-full p-1 bg-white rounded-md" onChange={(e)=>{
        onChange(e.target.selectedOptions[0].value)
      }}>
        {list.map((item,index) => 
            <option key={index} value={item.value}>{item.text}</option>
        )}
      </select>
    </div>
  );
};

export default Select;
