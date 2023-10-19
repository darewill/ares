import React from "react";

const tabs = ["Add Task", "List", "Archive"];
export const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs-wrapper">
      {tabs.map((i) => {
        return (
          <div
            className={"tab" + (activeTab === i ? " active" : "")}
            onClick={() => {
              setActiveTab(i);
            }}
          >
            {i}
          </div>
        );
      })}
    </div>
  );
};
