import React from "react";
import {Link} from 'react-router-dom';
import '../styles/LandingPageStyle.css'

const LandingPage = () => {
    return (
        <>
            <div className="wrapper">
                <div className="container1">
                    <div className="box1">
                        <img src="https://source.unsplash.com/random" alt="Photos" />
                    </div>
                    <div className="box2">
                        <p>10x Team 04</p>
                        <Link to='/PostView'><button>Enter</button></Link>
                    </div>                
                </div>
            </div> 
        </>
    )
}

export default LandingPage;