import React, { useState } from 'react';
import './MainPage.css';
import useCounter from "../counter/Counter";
import UICounter from '../menu/UICounter';
import UpgradeModal from "../counter/UpgradeModal";


const MainPage = () => {
  const { count, maxCount, incrementCount } = useCounter();
  const [content, setContent] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState('');
  const [isRequestPending, setIsRequestPending] = useState(false);

  // Replace with actual API integration
  // const generateMusic = async () => {
  //   if (isRequestPending) {
  //     return;
  //   }

  //   setIsRequestPending(true);
  //   const apiUrl = 'https://api.example.com/generate-music';
  //   const apiKey = 'YOUR_API_KEY_HERE';

  //   if (!apiKey) {
  //     setError('API key is missing');
  //     setIsRequestPending(false);
  //     return;
  //   }

  //   const headers = {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${apiKey}`,
  //   };

  //   const data = {
  //     content,
  //   };

  //   try {
  //     const response = await fetch(apiUrl, {
  //       method: 'POST',
  //       headers,
  //       body: JSON.stringify(data),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const result = await response.json();
  //     if (result.data && result.data.length > 0) {
  //       setList(result.data.map((track) => ({ content: track.url })));
  //       setError('');
  //       setContent('');
  //     } else {
  //       throw new Error('No music tracks available');
  //     }
  //   } catch (err) {
  //     console.error(`Error: ${err.message}`);
  //     setError(`Error: ${err.message}`);
  //   } finally {
  //     setIsRequestPending(false);
  //   }
  // };

  const generateMusic = async () => {
    if (isRequestPending || count >= maxCount) {
      return; // Prevent multiple simultaneous requests or exceeding maxCount
    }

    setIsRequestPending(true);
    incrementCount();

    const dummyMusic = [
      `https://www.example.com/sample-music.mp3?text=Music+${count + 1}`,
    ];
    
    setList((prevList) => [...prevList, ...dummyMusic.map((url) => ({ content: url }))]);
    setContent('');
    setIsRequestPending(false);
  };

  return (
    <div className="AI-Music-M">
      <div className="border-text-M">
        <textarea
          placeholder="Describe the music you want..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          id="message-text-M"
          name="message"
        ></textarea>
        <div className="p-2 w-full">
        {count >= maxCount ? (
            <button disabled className="button-text-M">
              {isRequestPending ? 'Generating...' : 'Max Reached'}
            </button>
          ) : (
            <button
              onClick={generateMusic}
              className="button-text-M"
              disabled={isRequestPending}
            >
              {isRequestPending ? 'Generating...' : `Generate ${count + 1}`}
            </button>
          )}
          <UpgradeModal count={count} maxCount={maxCount} />
        </div>
      </div>
      <section>
        <div>
          {list.reduceRight((acc, ele, index) => {
            acc.push(
              <div key={index}>
                <div
                  className="div-answer-message-M v1"
                  style={{
                    border: '1px solid #ddd',
                    marginBottom: '20px',
                    borderRadius: '5px',
                  }}
                >
                  <div className="P2-M">
                    <audio controls src={ele.content} />
                  </div>
                </div>
              </div>
            );
            return acc;
          }, [])}
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </section>
      <UICounter count={count} maxCount={maxCount} />
    </div>
  );
};

export default MainPage;
