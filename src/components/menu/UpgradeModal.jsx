import React, { useState } from 'react';
import '../counter/UpgradeModal.css'; 
import { MdTextsms } from 'react-icons/md';
import { CiImageOn } from 'react-icons/ci';
import { IoMusicalNotes, IoVideocamOutline } from 'react-icons/io5';
import { IoMdCode } from 'react-icons/io';
import { AiOutlineCheck } from 'react-icons/ai'; 
import { FaBolt } from 'react-icons/fa'; 

const UpgradeModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>X</button>
        <h2 className='ui-pro'>Upgrade Genius <span id='ui-pro'>PRO</span></h2>
        <ul className='ui-list'>
          <li>
            <MdTextsms 
              id="ui-Micon" 
              style={{ color: "rgb(139 92 246)", backgroundColor: 'rgba(139, 92, 246, 0.1)' }} 
            />
            <span>Conversation</span>
            <AiOutlineCheck className="checkmark-icon" /> 
          </li>
          <li>
            <CiImageOn 
              id="ui-Micon" 
              style={{ color: "rgb(190 24 93)", backgroundColor: 'rgba(217, 70, 239, 0.1)' }} 
            />
            <span>Image Generation</span>
            <AiOutlineCheck className="checkmark-icon" /> 
          </li>
          <li>
            <IoVideocamOutline 
              id="ui-Micon" 
              style={{ color: "rgb(194 65 12)", backgroundColor: 'rgba(255, 114, 0, 0.1)' }} 
            />
            <span>Video Generation</span>
            <AiOutlineCheck className="checkmark-icon" /> 
          </li>
          <li>
            <IoMusicalNotes 
              id="ui-Micon" 
              style={{ color: "rgb(16 185 129)", backgroundColor: 'rgba(16, 185, 129, 0.1)' }} 
            />
            <span>Music Generation</span>
            <AiOutlineCheck className="checkmark-icon" /> 
          </li>
          <li>
            <IoMdCode 
              id="ui-Micon" 
              style={{ color: "rgb(21 128 61)", backgroundColor: 'rgba(4, 120, 87, 0.1)' }} 
            />
            <span>Code Generation</span>
            <AiOutlineCheck className="checkmark-icon" /> 
          </li>
        </ul>
        <button className="ui-counter-button-2">
          <FaBolt className="ui-counter-icon-2" />
          <span>Upgrade</span>
        </button>
      </div>
    </div>
  );
};

export default UpgradeModal;
