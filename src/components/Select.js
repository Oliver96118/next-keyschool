import React from "react";

const Select = ({ id, list, cur, onChange }) => {
  return (
    <div>
      <select id={id} className="w-full p-1 bg-white rounded-md" onChange={(e)=>{
        onChange(e.target.selectedOptions[0].value)
      }}>
        {list.map((item,index) => {
         return index == cur-1 ? <option key={index} value={item.value}>{item.text}</option>
        : <option key={index} value={item.value}>{item.text}</option>
        }
        )}
      </select>
    </div>
  );
};

export default Select;
