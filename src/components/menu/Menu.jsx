import { NavLink } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
import { MdTextsms } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { IoMusicalNotes } from "react-icons/io5";
import { IoMdCode } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import "./Menu.css";
// import UICounter from './UICounter';

const Menu = () => {
    return (
        <div className="navbar">
            <div className="profile">
                <div className="imgbox">
                    <img src="logo.png" alt="Profile" />
                </div>
                <div className="heading">
                    <h3 className="title">Genius</h3>
                </div>
            </div>
            <ul>
                <li>
                    <NavLink to="/dash" exact className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                        <LuLayoutDashboard style={{color:"rgb(14 165 233)"}} id="Micon" />
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/conversation" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                        <MdTextsms id="Micon" style={{ color: "rgb(139 92 246)" }} />
                        <span>Conversation</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/image" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                        <CiImageOn id="Micon" style={{color:"rgb(190 24 93)"}}/>
                        <span>Image Generation</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/video" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                        <IoVideocamOutline style={{color:"rgb(194 65 12)"}} id="Micon"/>
                        <span>Video Generation</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/music" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                        <IoMusicalNotes style={{color:"rgb(16 185 129)"}} id="Micon"/>
                        <span>Music Generation</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/code" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                        <IoMdCode style={{color:"rgb(21 128 61)"}} id="Micon"/>
                        <span>Code Generation</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                        <CiSettings id="Micon"/>
                        <span>Settings</span>
                    </NavLink>
                </li>
            </ul>
            {/* <UICounter/> */}
        </div>
    );
}

export default Menu;
