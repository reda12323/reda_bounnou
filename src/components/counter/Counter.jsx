// Counter.js
// import { useState, useEffect } from "react";

// const Counter = () => {
//   const initialCount = parseInt(localStorage.getItem('count')) || 0;
//   const [count, setCount] = useState(initialCount);
//   const maxCount = 5;

//   useEffect(() => {
//     localStorage.setItem('count', count);
//   }, [count]);

//   const incrementCount = () => {
//     setCount(prevCount => prevCount + 1);
//   };

//   return { count, maxCount, incrementCount };
// };

// export default Counter;




// import React, { createContext, useContext, useState, useEffect } from "react";
// import { useUser } from "@clerk/clerk-react"; // Uncomment this line if you use Clerk for authentication

// const CounterContext = createContext();

// export const useCounter = () => useContext(CounterContext);

// export const CounterProvider = ({ children }) => {
//   const { user } = useUser();
//   const userId = user?.id || 'guest'; // Fallback to 'guest' if no user is logged in
//   const countStorageKey = `count_${userId}`;
//   const timerStartStorageKey = `timer_start_${userId}`;

//   const initialCount = parseInt(localStorage.getItem(countStorageKey)) || 0;
//   const maxCount = 5;
//   const initialTime = 60;

//   const [count, setCount] = useState(initialCount);
//   const [timer, setTimer] = useState(initialTime);
//   const [isTimerActive, setIsTimerActive] = useState(false);

//   useEffect(() => {
//     localStorage.setItem(countStorageKey, count);
//     console.log("Count updated:", count);
//   }, [count, countStorageKey]);

//   useEffect(() => {
//     if (count >= maxCount) {
//       const timerStart = localStorage.getItem(timerStartStorageKey);
//       const currentTime = Date.now();

//       console.log("Timer started, current time:", currentTime);

//       if (timerStart) {
//         const elapsedTime = Math.floor((currentTime - timerStart) / 1000);
//         const remainingTime = initialTime - elapsedTime;

//         console.log("Elapsed time:", elapsedTime);
//         console.log("Remaining time:", remainingTime);

//         if (remainingTime > 0) {
//           setTimer(remainingTime);
//           setIsTimerActive(true);
//           console.log("Timer is active, remaining time set to:", remainingTime);
//         } else {
//           resetCountAndTimer();
//         }
//       } else {
//         startTimer();
//       }
//     }

//     let interval;
//     if (isTimerActive) {
//       interval = setInterval(() => {
//         setTimer((prevTimer) => {
//           console.log("Timer tick:", prevTimer - 1);

//           if (prevTimer <= 1) {
//             clearInterval(interval);
//             resetCountAndTimer();
//             return initialTime;
//           }
//           return prevTimer - 1;
//         });
//       }, 1000);
//     }

//     return () => clearInterval(interval);
//   }, [count, isTimerActive]);

//   const incrementCount = () => {
//     setCount((prevCount) => {
//       const newCount = prevCount + 1;
//       console.log("Count incremented to:", newCount);

//       if (newCount >= maxCount) {
//         startTimer();
//       }
//       return newCount;
//     });
//   };

//   const startTimer = () => {
//     setIsTimerActive(true);
//     localStorage.setItem(timerStartStorageKey, Date.now());
//     console.log("Timer started, stored start time:", Date.now());
//   };

//   const resetCountAndTimer = () => {
//     console.log("Resetting count and timer");
//     setCount(0);
//     setTimer(initialTime);
//     setIsTimerActive(false);
//     localStorage.removeItem(timerStartStorageKey);
//   };

//   return (
//     <CounterContext.Provider value={{ count, maxCount, incrementCount, timer, isTimerActive }}>
//       {children}
//     </CounterContext.Provider>
//   );
// };

// export default CounterProvider; 
















import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

const useCounter = () => {
  const { user } = useUser();
  const userId = user?.id || 'guest'; // Fallback to 'guest' if no user is logged in
  const countStorageKey = `count_${userId}`;
  const timerStartStorageKey = `timer_start_${userId}`;

  const initialCount = parseInt(localStorage.getItem(countStorageKey)) || 0;
  const maxCount = 5;
  const initialTime = 60;

  const [count, setCount] = useState(initialCount);
  const [timer, setTimer] = useState(initialTime);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    localStorage.setItem(countStorageKey, count);
    console.log("Count updated:", count);
  }, [count, countStorageKey]);

  useEffect(() => {
    if (count >= maxCount) {
      const timerStart = localStorage.getItem(timerStartStorageKey);
      const currentTime = Date.now();

      console.log("Timer started, current time:", currentTime);

      if (timerStart) {
        const elapsedTime = Math.floor((currentTime - timerStart) / 1000);
        const remainingTime = initialTime - elapsedTime;

        console.log("Elapsed time:", elapsedTime);
        console.log("Remaining time:", remainingTime);

        if (remainingTime > 0) {
          setTimer(remainingTime);
          setIsTimerActive(true);
          console.log("Timer is active, remaining time set to:", remainingTime);
        } else {
          resetCountAndTimer();
        }
      } else {
        startTimer();
      }
    }

    let interval;
    if (isTimerActive) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          console.log("Timer tick:", prevTimer - 1);

          if (prevTimer <= 1) {
            clearInterval(interval);
            resetCountAndTimer();
            return initialTime;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [count, isTimerActive]);

  const incrementCount = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      console.log("Count incremented to:", newCount);

      if (newCount >= maxCount) {
        startTimer();
      }
      return newCount;
    });
  };

  const startTimer = () => {
    setIsTimerActive(true);
    localStorage.setItem(timerStartStorageKey, Date.now());
    console.log("Timer started, stored start time:", Date.now());
  };

  const resetCountAndTimer = () => {
    console.log("Resetting count and timer");
    setCount(0);
    setTimer(initialTime);
    setIsTimerActive(false);
    localStorage.removeItem(timerStartStorageKey);
  };

  return { count, maxCount, incrementCount, timer, isTimerActive };
};

export default useCounter;


