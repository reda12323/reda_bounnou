import MainPage from "./MainPage";
import { IoMdCode } from "react-icons/io";
import Menu from "../menu/Menu";
import "./Code.css";
import { UserButton } from "@clerk/clerk-react";
const Code = () => {
    return (
        <div  className="containerM-Code">
            <Menu />
            <div className="containerM-main-Code">
                <div className="containerM-navbar-Code">
                    <h3>Genius</h3>
                    {/* <Login/> */}
                    <h4>
                        <UserButton/>
                    </h4>
                </div>
                <div className="containerP-Code">
                    <div className="content-Code">
                        <div className="helmet-Code">
                            <div id="div">
                            <IoMdCode id="icon" />
                            </div>
                            <div id="div2">
                                <h1>Code Generation</h1>
                                <p>Our most advanced code model</p>
                            </div>
                        </div>
                    </div>
                    <MainPage />
                </div>
            </div>
            
        </div>
    );
}
 
export default Code; 