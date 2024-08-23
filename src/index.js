// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ClerkProvider } from '@clerk/clerk-react';

const clerk_key='pk_test_ZW1lcmdpbmctYnJlYW0tMy5jbGVyay5hY2NvdW50cy5kZXYk';

console.log(clerk_key);

if(!clerk_key){
  throw new Error("Key was not found");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerk_key} afterSignOutUrl="/" afterSignInUrl="/dash" afterSignUpUrl="/dash">
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App.js';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, SignIn, SignUp, UserButton } from '@clerk/clerk-react';

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const ClerkWithRoutes = () => {
//   console.log("ClerkWithRoutes is rendering");
//   const navigate = useNavigate();
//   return (
//     <ClerkProvider
//       routerPush={(to) => navigate(to)}
//       routerReplace={(to) => navigate(to, { replace: true })}
//       publishableKey={PUBLISHABLE_KEY}
//     >
//       <Routes>
//         <Route path='/app' element={<App />} />
//         <Route redirectUrl={'/protected'} path='/sign-in/' element={<SignIn />} />
//         <Route redirectUrl={'/protected'} path='/sign-up/' element={<SignUp />} />
//         <Route path='/protected' element={
//           <>
//             <SignedIn>
//               <UserButton />
//               <h1>Signed In</h1>
//             </SignedIn>
//             <SignedOut>
//               <h1>Signed Out</h1>
//               <RedirectToSignIn />
//             </SignedOut>
//           </>
//         } />
//       </Routes>
//     </ClerkProvider>
//   );
// }

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ClerkWithRoutes />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// reportWebVitals();
