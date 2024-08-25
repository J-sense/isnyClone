import React from "react";
import profile from "../../assets/images/profile-pic (2).png";


const HeaderItem = ({ name, Icon }) => {

  
  return (
    <div className="text-white my-2 flex gap-3 items-center hover:underline underline-offset-8">
      <Icon />
      <h1 className="">{name}</h1>
    </div>
  );
};

export default HeaderItem;
