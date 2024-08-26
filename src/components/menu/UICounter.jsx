// UICounter.jsx
import './UICounter.css';
import { FaBolt } from 'react-icons/fa'; 
import  useCounter  from '../counter/Counter'
import { useEffect, useState } from 'react';

const UICounter = () => {
    const { count, maxCount } = useCounter(); // Use the custom hook to get counter values
    const [progressPercentage, setProgressPercentage] = useState((count / maxCount) * 100);

    useEffect(() => {
        // Calculate and set progress percentage when count changes
        setProgressPercentage((count / maxCount) * 100);
    }, [count, maxCount]);

    return (
        <div className="ui-counter-container">
            <div className="ui-counter-info">
                <p className="ui-counter-text">{count} / {maxCount} <span>Free Generation</span></p>
                <div className="ui-counter-progress">
                    <div className="ui-counter-progress-bar" style={{ width: `${progressPercentage}%` }}></div>
                </div>
                <button className="ui-counter-button">
                    <FaBolt className="ui-counter-icon" />
                    <span>Upgrade</span>
                </button>
            </div>
        </div>
    );
}

export default UICounter;
