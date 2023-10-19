import React from "react";

export const MainNav = ({ list, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <div className="nav">
        {list.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </>
  );
};
