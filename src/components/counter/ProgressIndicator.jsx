import React from 'react';
import './ProgressIndicator.css'; // Create and link a CSS file for custom styles

const ProgressIndicator = ({ clickCount }) => {
  const maxFreeRequests = 5;
  const remainingRequests = maxFreeRequests - clickCount;
  const progressPercentage = (clickCount / maxFreeRequests) * 100;

  return (
    <div className="progress-container-U">
      <div className="progress-background-U">
        <div
          className="progress-bar-U"
          style={{
            width: `${progressPercentage}%`,
            backgroundColor: progressPercentage > 80 ? '#ff69b4' : '#4caf50',
          }}
        ></div>
        <div className="progress-text-U">
          {remainingRequests}/5 free generations remaining
        </div>
      </div>
      <button className="upgrade-button-U">
        Upgrade
      </button>
    </div>
  );
};

export default ProgressIndicator;
