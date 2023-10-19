import { createRoot } from "react-dom/client";
import React from "react";
import { Tabs } from "./Tabs";
import { Display } from "./display";

const domNode = document.querySelector("#app");

const root = createRoot(domNode);


function Main() {
  const [activeTab, setActiveTab] = React.useState('Add Task');
  const [activeTTab, setActiveTTab] = React.useState({
    title: '',
    description: '',
    date: ''
  });
  


  return (
    <div id="mainwrap">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>

      <Display display={activeTTab}/>
    </div>
  );
}

root.render(<Main />);
