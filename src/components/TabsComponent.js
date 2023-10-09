import React, { useState } from 'react';
import './YourComponent.css'; // Import your component-specific CSS

function YourComponent() {
  const [activeTab, setActiveTab] = useState('topHeadlines'); // Use state to track the active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="tab-container">
        <button
          className={`tab-button ${activeTab === 'topHeadlines' ? 'active' : ''}`}
          onClick={() => handleTabClick('topHeadlines')}
        >
          Top Headlines
        </button>
        <button
          className={`tab-button ${activeTab === 'everything' ? 'active' : ''}`}
          onClick={() => handleTabClick('everything')}
        >
          Everything
        </button>
      </div>

      {/* Content for Top Headlines tab */}
      {activeTab === 'topHeadlines' && (
        <div className="tab-content">
          {/* Your Top Headlines content goes here */}
        </div>
      )}

      {/* Content for Everything tab */}
      {activeTab === 'everything' && (
        <div className="tab-content">
          {/* Your Everything content goes here */}
        </div>
      )}
    </div>
  );
}

export default YourComponent;
