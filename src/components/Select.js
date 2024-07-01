import React from "react";

const Select = ({ list, onChange }) => {
  return (
    <div>
      {/* {console.log(list)} */}
      <select className="w-full" onChange={(e)=>{
        onChange(e.target.selectedOptions[0].id)
      }}>
        {list.map((item,index) => 
            <option key={index} id={item.id}>{item.text}</option>
        )}
      </select>
    </div>
  );
};

export default Select;
