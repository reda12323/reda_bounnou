import React, { useState } from 'react';
import './MainPage.css';
import useCounter from "../counter/Counter";
import UICounter from '../menu/UICounter';
import UpgradeModal from "../counter/UpgradeModal";


const MainPage = () => {
  const { count, maxCount, incrementCount } = useCounter(); // Instantiate the counter
  const [description, setDescription] = useState('');
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');
  const [isRequestPending, setIsRequestPending] = useState(false);

  // Replace with actual API integration
  // const generateVideo = async () => {
  //   if (isRequestPending) {
  //     return; // Prevent multiple simultaneous requests
  //   }

  //   setIsRequestPending(true);
  //   const apiUrl = 'https://api.example.com/generate-video';
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
  //     description,
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
  //       setVideos(result.data.map((vid) => vid.url));

  //       setError(''); // Clear any previous error
  //       setDescription(''); // Clear input after successful submission
  //     } else {
  //       throw new Error('No videos available');
  //     }
  //   } catch (err) {
  //     console.error(`Error: ${err.message}`);
  //     setError(`Error: ${err.message}`);
  //   } finally {
  //     setIsRequestPending(false);
  //   }
  // };

  const generateVideo = async () => {
    if (isRequestPending || count >= maxCount) {
      return; // Prevent multiple simultaneous requests or exceeding maxCount
    }

    setIsRequestPending(true);
    incrementCount(); // Increment the count

    // Simulate video generation
    const dummyVideos = [
      `https://www.example.com/sample-video.mp4?text=Video+${count + 1}`,
    ];
    setVideos([...videos, ...dummyVideos]);
    setDescription('');
    setIsRequestPending(false);
  };

  return (
    <div className="AI-Video-Generator-V">
      <div className="border-text-V">
        <textarea
          placeholder="Describe the video you want..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="description-text-V"
          name="description"
        ></textarea>
        <div className="p-2 w-full">
        {count >= maxCount ? (
            <button
              disabled
              className="button-text-V"
            >
              {isRequestPending ? 'Generating...' : 'Max Reached'}
            </button>
          ) : (
            <button
              onClick={generateVideo}
              className="button-text-V"
              disabled={isRequestPending}
            >
              {isRequestPending ? 'Generating...' : `Generate Video ${count + 1}`}
            </button>
          )}
          <UpgradeModal count={count} maxCount={maxCount} />
        </div>
      </div>
      <section>
        <div>
          {videos.reduceRight((acc, vid, index) => {
            acc.push(
              <div key={index}>
                <div
                  className="div-video-message-V v1"
                  style={{
                    padding: '15px',
                    textAlign: 'center',
                    border: '1px solid #ddd',
                    marginBottom: '20px',
                    borderRadius: '5px',
                  }}
                >
                  <div className="P2-V">
                    <video controls src={vid} alt={`Generated ${index + 1}`} className="video-player-V" />
                  </div>
                </div>
                <div
                  className="div-video-message-V v2"
                  style={{
                    marginBottom: '20px',
                    borderRadius: '5px',
                  }}
                >
                  <a href={vid} download={`generated_video_${index + 1}.mp4`} className="download-link-V">Download</a>
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
