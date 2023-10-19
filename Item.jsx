import React from "react";

export const Item = ({ value, changeValue, addToValue }) => {
  return (
    <div
      className="button"
      onClick={() => {
        if (addToValue) {
          addToValue(Number.parseInt(value));
        } else {
          changeValue(value);
        }
      }}
    >
      {value}
    </div>
  );
};
