import MainPage from "./MainPage";
import { IoMusicalNotes } from "react-icons/io5";
import Menu from "../menu/Menu";
import "./Music.css";
import { UserButton } from "@clerk/clerk-react";

const Music = () => {
    return (
        <div  className="containerM-M">
            <Menu />
            <div className="containerM-main-M">
                <div className="containerM-navbar-M">
                    <h3>Genius</h3>
                    {/* <Login/> */}
                    <h4>
                        <UserButton/>
                    </h4>
                </div>
                <div className="containerP-M">
                    <div className="content-M">
                        <div className="helmet-M">
                            <div id="div">
                            <IoMusicalNotes id="icon" />
                            </div>
                            <div id="div2">
                                <h1>Music Generation</h1>
                                <p>Our most advanced music model</p>
                            </div>
                        </div>
                    </div>
                    <MainPage />
                </div>
            </div>
        </div>
    );
}
 
export default Music;