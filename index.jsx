import { createRoot } from "react-dom/client";
import React from "react";
import { Tabs } from "./Tabs";
import { Display } from "./display";
import { Form } from "./components/Form";

const domNode = document.querySelector("#app");

const root = createRoot(domNode);

const x = { emri: 'Gent', mbiemri: 'Spahiu'};
const y = { ...x, mbiemri: 'Gashi' };

function Main() {
  const [activeTab, setActiveTab] = React.useState("Add Task");

  return (
    <div id="mainwrap">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="content">
        <Form />
      </div>
    </div>
  );
}

root.render(<Main />);
