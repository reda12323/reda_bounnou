import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Conversation from "./components/conversation/Conversation.jsx";
import Image from "./components/image/Image.jsx";
import Video from "./components/video/Video.jsx";
import Music from "./components/music/Music.jsx";
import Code from "./components/code/Code.jsx";
import Home from './components/home/Home.jsx';
import './App.css';
import { SignIn, SignUp } from '@clerk/clerk-react';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/signin' element={<SignIn />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/' element={<Home />} />
                    <Route 
                        path='/dash' 
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        } 
                    />
                    <Route 
                        path='/conversation' 
                        element={
                            <ProtectedRoute>
                                <Conversation />
                            </ProtectedRoute>
                        } 
                    />
                    <Route 
                        path='/image' 
                        element={
                            <ProtectedRoute>
                                <Image />
                            </ProtectedRoute>
                        } 
                    />
                    <Route 
                        path='/video' 
                        element={
                            <ProtectedRoute>
                                <Video />
                            </ProtectedRoute>
                        } 
                    />
                    <Route 
                        path='/music' 
                        element={
                            <ProtectedRoute>
                                <Music />
                            </ProtectedRoute>
                        } 
                    />
                    <Route 
                        path='/code' 
                        element={
                            <ProtectedRoute>
                                <Code />
                            </ProtectedRoute>
                        } 
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
