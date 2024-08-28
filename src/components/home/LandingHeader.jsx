import { Link } from 'react-router-dom';
import './LandingHeader.css';
const LandingHeader = () => {
    return (
        <div className="lh-header">
            <div className='lh-first-part'>
                <img className="lh-img" src="logo.png" alt="Profile" />
                <h3 className="title">Genius</h3>
            </div>
            <div className='lh-second-part'>
                <Link to="/signup">
                    <button>Get Started</button>
                </Link>
            </div>
        </div>
    );
}
 
export default LandingHeader;