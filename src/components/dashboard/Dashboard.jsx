import MainPage from "./MainPage";
import Menu from "../menu/Menu";
import "./Dashboard.css";
import { UserButton } from "@clerk/clerk-react";
const Dashboard = () => {
    return (
        <div  className="containerM">
            <Menu />
            <div className="containerM-main">
                <div className="containerM-navbar">
                    <h3>Genius</h3>
                    {/* <Login/> */}
                    <h4>
                        <UserButton/>
                    </h4>
                </div>
                <div className="containerP">
                    <div className="content">
                        <h1>Explore the power of AI</h1>
                        <p>Chat with the smartest AI</p>
                    </div>
                    <MainPage />
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard; 