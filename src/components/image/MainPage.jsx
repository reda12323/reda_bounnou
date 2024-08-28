import React, { useState } from "react";
import './MainPage.css';
import useCounter from "../counter/Counter";  // Import the useCounter hook
import UICounter from "../menu/UICounter";
import UpgradeModal from "../counter/UpgradeModal";


const MainPage = () => {
  const { count, maxCount, incrementCount } = useCounter(); // Instantiate the counter
  const [description, setDescription] = useState('');
  const [numImages, setNumImages] = useState(1);
  const [resolution, setResolution] = useState('1024x1024');
  const [images, setImages] = useState([]);
  const [isRequestPending, setIsRequestPending] = useState(false);
  const [error, setError] = useState('');

  // const generateImages = async () => {
  //   if (isRequestPending) {
  //     return; // Prevent multiple simultaneous requests
  //   }

  //   setIsRequestPending(true);
  //   const apiUrl = 'https://api.openai.com/v1/images/generations';
  //   const apiKey = 'YOUR_API_KEY_HERE';

  //   const headers = {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${apiKey}`,
  //   };

  //   const data = {
  //     prompt: description,
  //     n: numImages,
  //     size: resolution,
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
  //     setImages(result.data.map((img) => img.url));

  //     setError(''); // Clear any previous error
  //   } catch (err) {
  //     console.error(`Error: ${err.message}`);
  //     setError(`Error: ${err.message}`);
  //   } finally {
  //     setIsRequestPending(false);
  //   }
  // };

  const generateImages = async () => {
    if (isRequestPending || count >= maxCount) {
      return; // Prevent multiple simultaneous requests or exceeding maxCount
    }

    setIsRequestPending(true);
    incrementCount(); // Increment the count

    // Simulate image generation
    const dummyImages = Array.from({ length: numImages }, (_, i) => `https://via.placeholder.com/${resolution}?text=Image+${i+1}`);
    setImages(dummyImages);
    setDescription('');

    setIsRequestPending(false);
  };

  return (
    <div className="AI-Image-Generator-I">
      <div className="border-text-I">
        <textarea
          placeholder="Describe the image you want..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="description-text-I"
          name="description"
        ></textarea>

        <div className="dropdown-container-I">
          <label htmlFor="num-images-I">Number of Images:</label>
          <select id="num-images-I" value={numImages} onChange={(e) => setNumImages(e.target.value)}>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>

          <label htmlFor="resolution-I">Resolution:</label>
          <select id="resolution-I" value={resolution} onChange={(e) => setResolution(e.target.value)}>
            <option value="512x512">512x512</option>
            <option value="1024x1024">1024x1024</option>
            <option value="1280x720">1280x720</option>
            <option value="1920x1080">1920x1080</option>
          </select>
        </div>

        <div className="p-2-I w-full-I">
        {count >= maxCount ? (
            <button
              disabled
              className="button-text-I"
            >
              {isRequestPending ? 'Generating...' : 'Max Reached'}
            </button>
          ) : (
            <button
              onClick={generateImages}
              className="button-text-I"
              disabled={isRequestPending}
            >
              {isRequestPending ? 'Generating...' : `Generate ${count + 1}`}
            </button>
          )}
          <UpgradeModal count={count} maxCount={maxCount} />
        </div>
      </div>

      <section>
        <div className="images-container-I">
          {images.map((img, index) => (
            <div key={index} className="image-card-I">
              <img src={img} alt={`Generated ${index + 1}`} />
              <a href={img} download={`generated_image_${index + 1}.png`} className="download-link-I">Download</a>
            </div>
          ))}
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </section>
      <UICounter count={count} maxCount={maxCount} />
    </div>
  );
};

export default MainPage;
