import React from 'react';
import { SignIn, SignUp, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./dashboard/Dashboard.jsx";
import Conversation from "./conversation/Conversation.jsx";
import Image from "./image/Image.jsx";
import Video from "./video/Video.jsx";
import Music from "./music/Music.jsx";

const AccuielPage = () => {
    return (
        <Router>
            <div>
                <SignedIn>
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/conversation' element={<Conversation />} />
                        <Route path='/image' element={<Image />} />
                        <Route path='/video' element={<Video />} />
                        <Route path='/music' element={<Music />} />
                    </Routes>
                </SignedIn>
                <SignedOut>
                    <Routes>
                        <Route path='/' element={<RedirectToSignIn />} />
                        <Route path='/sign-in' element={<SignIn />} />
                        <Route path='/sign-up' element={<SignUp />} />
                    </Routes>
                </SignedOut>
            </div>
        </Router>
    );
};

export default AccuielPage;
