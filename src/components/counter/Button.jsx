import React, { useState } from 'react';

const Button = ({ aiType }) => {
  const [isRequestPending, setIsRequestPending] = useState(false);
  const [list, setList] = useState([]);
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [numImages, setNumImages] = useState(3); // Example number of images
  const [resolution, setResolution] = useState('200x200'); // Example resolution
  const [images, setImages] = useState([]);
  const [qteBefore, setQteBefore] = useState([]);
  const [smrBefore, setSmrBefore] = useState([]);
  const [videos, setVideos] = useState([]);

  const handleClick = async (callback) => {
    setIsRequestPending(true);

    // Execute specific AI logic
    await callback();

    setIsRequestPending(false);
  };

  const summarize = async () => {
    const newQteBefore = { content };
    const newSmrBefore = { summary };

    setQteBefore([...qteBefore, newQteBefore]);
    setSmrBefore([...smrBefore, newSmrBefore]);
    setList([...list, { qteBefore: newQteBefore, smrBefore: newSmrBefore }]);
    setContent('');
  };

  const generateMusic = async () => {
    const dummyMusic = [
      `https://www.example.com/sample-music.mp3?text=Music+1`,
    ];
    setList(dummyMusic.map((url) => ({ content: url })));
    setContent('');
  };

  const generateImages = async () => {
    const dummyImages = Array.from({ length: numImages }, (_, i) => 
      `https://via.placeholder.com/${resolution}?text=Image+${i + 1}`
    );
    setImages(dummyImages);
    setContent('');
  };

  const generateVideo = async () => {
    const dummyVideos = [
      `https://www.example.com/sample-video.mp4?text=Video+1`,
    ];
    setVideos(dummyVideos);
    setContent('');
  };

  return (
    <div>
      {aiType === 'conversation' && (
        <button
          onClick={() => handleClick(summarize)}
          className="button-text"
          disabled={isRequestPending}
        >
          {isRequestPending ? 'Generating...' : 'Generate'}
        </button>
      )}

      {aiType === 'music' && (
        <button
          onClick={() => handleClick(generateMusic)}
          className="button-text-M"
          disabled={isRequestPending}
        >
          {isRequestPending ? 'Generating...' : 'Generate Music'}
        </button>
      )}

      {aiType === 'image' && (
        <button
          onClick={() => handleClick(generateImages)}
          className="button-text-I"
          disabled={isRequestPending}
        >
          {isRequestPending ? 'Generating...' : 'Generate Images'}
        </button>
      )}

      {aiType === 'video' && (
        <button
          onClick={() => handleClick(generateVideo)}
          className="button-text-V"
          disabled={isRequestPending}
        >
          {isRequestPending ? 'Generating...' : 'Generate Video'}
        </button>
      )}

      {/* Display generated content */}
      {list.length > 0 && <div>{list.map((item, idx) => <div key={idx}>{item.content}</div>)}</div>}
      {images.length > 0 && <div>{images.map((img, idx) => <img key={idx} src={img} alt={`Image ${idx + 1}`} />)}</div>}
      {videos.length > 0 && <div>{videos.map((vid, idx) => <video key={idx} controls src={vid} />)}</div>}
    </div>
  );
};

export default Button;
