import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./MainPage.css";

import { MdTextsms } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { IoMusicalNotes } from "react-icons/io5";
import { IoMdCode } from "react-icons/io";

const tools = [
  {
      label: "Conversation",
      icon: MdTextsms,
      color: { color: '#8b5cf6' },
      bgColor: { backgroundColor: 'rgba(139, 92, 246, 0.1)' },
      href: "/conversation"
  },
  {
      label: "Music Generation",
      icon: IoMusicalNotes,
      color: { color: '#10b981' },
      bgColor: { backgroundColor: 'rgba(16, 185, 129, 0.1)' },
      href: "/music"
  },
  {
      label: "Image Generation",
      icon: CiImageOn,
      color: { color: '#d946ef' },
      bgColor: { backgroundColor: 'rgba(217, 70, 239, 0.1)' },
      href: "/image"
  },
  {
      label: "Video Generation",
      icon: IoVideocamOutline,
      color: { color: '#f97316' },
      bgColor: { backgroundColor: 'rgba(255, 114, 0, 0.1)' },
      href: "/video"
  },
  {
      label: "Code Generation",
      icon: IoMdCode,
      color: { color: '#047857' },
      bgColor: { backgroundColor: 'rgba(4, 120, 87, 0.1)' },
      href: "/code"
  }
];


const MainPage = () => {
    return (
        <div>
            {tools.map((tool, index) => (
                
                    <Link key={index} to={`${tool.href}`} className="card-link">
                        <div className="card-container">
                            <div className="card-content">
                                <div className="card" >
                                    <div 
                                        className="icon-container"
                                        style={tool.bgColor} // Apply background color inline
                                    >
                                        <tool.icon 
                                            className="icon" 
                                            style={tool.color} // Apply text color inline
                                        />
                                    </div>
                                    <div className="card-label">
                                        {tool.label}
                                    </div>
                                </div>
                                <BsArrowRight className="arrow-icon" />
                            </div>
                        </div>
                    </Link>
                
            ))}
        </div>
    );
}
 
export default MainPage;