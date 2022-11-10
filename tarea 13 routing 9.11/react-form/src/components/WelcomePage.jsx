import { Link } from "react-router-dom";
import './WelcomePage.css';

export default function WelcomePage(){

    return (
        <div className='welcomePageContainer'>
           <h1 className="welcomeMsg">Welcome Page</h1>
           <Link className="startFormLink" to="form" style={{'font-size':30, color: 'red', 'background-color': 'cyan', 'text-decoration': 'underline'}}> Start Form </Link>
        </div>
    )
}