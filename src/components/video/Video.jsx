import Menu from "../menu/Menu";
import { IoVideocamOutline } from "react-icons/io5";
import MainPage from "./MainPage";
import './Video.css'
import { UserButton } from "@clerk/clerk-react";

const Video = () => {
    return (
        <div  className="containerM-V">
            <Menu />
            <div className="containerM-main-V">
                <div className="containerM-navbar-V">
                    <h3>Genius</h3>
                    {/* <Login/> */}
                    <h4>
                        <UserButton/>
                    </h4>
                </div>
                <div className="containerP-V">
                    <div className="content-V">
                        <div className="helmet-V">
                            <div id="div">
                            <IoVideocamOutline id="icon" />
                            </div>
                            <div id="div2">
                                <h1>Video Generation</h1>
                                <p>Our most advanced conversation model</p>
                            </div>
                        </div>
                    </div>
                    <MainPage />
                </div>
            </div>
        </div>
    );
}
 
export default Video;