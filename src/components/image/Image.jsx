import Menu from "../menu/Menu";
import { CiImageOn } from "react-icons/ci";
import MainPage from "./MainPage";
import './Image.css'
import { UserButton } from "@clerk/clerk-react";

const Image = () => {
    return (
        <div  className="containerM-I">
            <Menu />
            <div className="containerM-main-I">
                <div className="containerM-navbar-I">
                    <h3>Genius</h3>
                    {/* <Login/> */}
                    <h4>
                        <UserButton/>
                    </h4>
                </div>
                <div className="containerP-I">
                    <div className="content-I">
                        <div className="helmet-I">
                            <div id="div">
                            <CiImageOn id="icon" />
                            </div>
                            <div id="div2">
                                <h1>Image Generation</h1>
                                <p>Our most advanced image model</p>
                            </div>
                        </div>
                    </div>
                    <MainPage />
                </div>
            </div>
        </div>
    );
}
 
export default Image;