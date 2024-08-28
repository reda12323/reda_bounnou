import './UICounter.css';
import { FaBolt } from 'react-icons/fa'; 
import { useEffect, useState } from 'react';
import UpgradeModal from './UpgradeModal';

const UICounter = ({ count, maxCount }) => {
  const [progressPercentage, setProgressPercentage] = useState((count / maxCount) * 100);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Calculate and set progress percentage when count changes
    setProgressPercentage((count / maxCount) * 100);
  }, [count, maxCount]);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="ui-counter-container">
      <div className="ui-counter-info">
        <p className="ui-counter-text">{count} / {maxCount} <span>Free Generation</span></p>
        <div className="ui-counter-progress">
          <div className="ui-counter-progress-bar" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <button className="ui-counter-button" onClick={handleOpenModal}>
          <FaBolt className="ui-counter-icon" />
          <span>Upgrade</span>
        </button>
      </div>
      {showModal && <UpgradeModal onClose={handleCloseModal} />}
    </div>
  );
}

export default UICounter;
