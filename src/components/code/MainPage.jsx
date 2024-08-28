import React, { useState } from "react";
import './MainPage.css';
import useCounter from "../counter/Counter";
import UICounter from "../menu/UICounter";
import UpgradeModal from "../counter/UpgradeModal";

const MainPage = () => {
  const { count, maxCount, incrementCount } = useCounter(); 
  const [codeInput, setCodeInput] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [error, setError] = useState('');
  const [previousInputs, setPreviousInputs] = useState([]);
  const [previousOutputs, setPreviousOutputs] = useState([]);
  const [list, setList] = useState([]);
  const [isRequestPending, setIsRequestPending] = useState(false);

  // const generateCode = async () => {
  //   if (isRequestPending) return; // Prevent multiple simultaneous requests
  //   if (count >= maxCount) return; // Stop if the count exceeds maxCount

  //   setIsRequestPending(true);
  //   incrementCount(); // Increment the count

  //   const apiUrl = 'https://api.openai.com/v1/completions';
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
  //     model: 'text-davinci-003', // Adjust the model as needed
  //     prompt: codeInput,
  //     max_tokens: 150, // Adjust based on your needs
  //     temperature: 0.7, // Adjust based on your needs
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
  //     if (result.choices && result.choices.length > 0) {
  //       const generatedCode = result.choices[0].text;
  //       setGeneratedCode(generatedCode);

  //       const newInput = { codeInput };
  //       const newOutput = { generatedCode };

  //       setPreviousInputs([...previousInputs, newInput]);
  //       setPreviousOutputs([...previousOutputs, newOutput]);
  //       setList([...list, { input: newInput, output: newOutput }]);

  //       setError(''); // Clear any previous error
  //       setCodeInput(''); // Clear input after successful submission
  //     } else {
  //       throw new Error('No code generated');
  //     }
  //   } catch (err) {
  //     console.error(`Error: ${err.message}`);
  //     setError(`Error: ${err.message}`);
  //   } finally {
  //     setIsRequestPending(false);
  //   }
  // };

  const generateCode = async () => {
    if (isRequestPending) return; 
    if (count >= maxCount) return; 

    setIsRequestPending(true);
    incrementCount(); 

   
    setTimeout(() => {
      const newInput = { codeInput };
      const newOutput = { generatedCode: `Generated code for: ${generatedCode}` };

      setPreviousInputs([...previousInputs, newInput]);
      setPreviousOutputs([...previousOutputs, newOutput]);
      setList([...list, { input: newInput, output: newOutput }]);
      setCodeInput(''); 
      setIsRequestPending(false);
    }, 1000); 
  };

  return (
    <div className="AI-Code-Generation">
      <div className="border-text">
        <textarea
          placeholder="Enter code prompt..."
          value={codeInput}
          onChange={(e) => setCodeInput(e.target.value)}
          id="code-input-text"
          name="code-input"
        ></textarea>
        <div className="p-2 w-full">
          {count >= maxCount ? (
            <button
              disabled
              className="button-text"
            >
              {isRequestPending ? 'Generating...' : 'Max Reached'}
            </button>
          ) : (
            <button
              onClick={generateCode}
              className="button-text"
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
                  className="div-answer-message v1"
                  style={{
                    border: '1px solid #ddd',
                    marginBottom: '20px',
                    borderRadius: '5px',
                  }}
                >
                  <p className="P1">I:</p>
                  <div className="P2">
                    {ele.input.codeInput}
                  </div>
                </div>

                <div
                  className="div-answer-message v2"
                  style={{
                    border: '1px solid #ddd',
                    marginBottom: '20px',
                    borderRadius: '5px',
                  }}
                >
                  <p className="P1">C:</p>
                  <div className="P2">
                    {ele.output.generatedCode}
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
