import React from "react";

const Select = ({ list, onChange }) => {
  return (
    <div>
      {/* {console.log(list)} */}
      <select onChange={(e)=>{
        onChange(e.target.selectedIndex)
      }}>
        {list.map((item,index) => 
            <option key={index} id={item.id}>{item.text}</option>
        )}
      </select>
    </div>
  );
};

export default Select;
