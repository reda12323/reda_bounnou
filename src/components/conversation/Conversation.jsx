import MainPage from "./MainPage";
import { MdTextsms } from "react-icons/md";
import Menu from "../menu/Menu";
import "./Conversation.css";
import { UserButton } from "@clerk/clerk-react";
const Conversation = () => {
    return (
        <div  className="containerM-C">
            <Menu />
            <div className="containerM-main-C">
                <div className="containerM-navbar-C">
                    <h3>Genius</h3>
                    {/* <Login/> */}
                    <h4>
                        <UserButton/>
                    </h4>
                </div>
                <div className="containerP-C">
                    <div className="content-C">
                        <div className="helmet-C">
                            <div id="div">
                            <MdTextsms id="icon" />
                            </div>
                            <div id="div2">
                                <h1>Conversation</h1>
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
 
export default Conversation; 