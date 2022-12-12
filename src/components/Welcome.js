import { Link } from "react-router-dom";
import DownArrow from "../assets/icon/arrow-down.svg";
import "../styles/welcome.css";
import "../styles/responsive-styles/home-responsive.css";
import {Helmet} from 'react-helmet';


export default function Welcome() {
    return (
        <>
        <Helmet>
            <style>{'body { background-image: url("https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80") }'}</style>
        </Helmet>
            <div className="home-container">
                <div className="welcome-container">
                    <div className="welcome-info">
                        <div>
                            <h1>Welcome To The Georgian Kitchen</h1>
                        </div>
                        <div className="hint-div">
                            <p>Tap Here To See Georgian Popular Foods</p>
                        </div>
                        <div className="hint-arrow">
                            <img className="hint-arrow-icon" src={DownArrow} alt="down arrow" />
                        </div>
                        <div className="button-container">
                            <Link to="food-list"><button>Click Me</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}