import React from "react";

const Select = ({ id, list, onChange }) => {
  return (
    <div>
      {/* {console.log(list)} */}
      <select id={id} className="w-full p-2 bg-white rounded-md" onChange={(e)=>{
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
