import { useState } from "react";
import "./styles.css";

export function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.name || "");

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={activeTab === tab.name ? "active" : ""}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {tabs.map(
          (tab) =>
            activeTab === tab.name && (
              <div key={tab.name} className="tab-pane">
                {tab.form}
              </div>
            )
        )}
      </div>
    </div>
  );
}
