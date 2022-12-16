import React from "react";
import more from '../images/more_icon.jpg'
import heart from '../images/heart.jpg'
import share from '../images/share.jpg'


const Card = (prop) => {
    console.log(prop.pass.PostImage.data.data);
    const img = btoa(String.fromCharCode(...new Uint8Array(prop.pass.PostImage.data.data)))
    return (
        <>
            <div className="container">
                <div className="row1">
                    <p className="ptype1">{prop.pass.name}</p>
                    <p className="ptype2">{prop.pass.location}</p>
                </div>
                <div className="dot">
                    <img src={more} style={{width: '5px', height:'5px' }} alt="options" />
                    <img src={more} style={{width: '5px', height:'5px' }} alt="options" />
                    <img src={more} style={{width: '5px', height:'5px' }} alt="options" />
                </div> 
                <div className="image">
                    
                    <img src={`data:image/png;base64,${img}`} alt="asfs"></img>


                </div>
                 <div className="row3">
                        <img src={heart} style={{width: '20px', height:'20px' }} alt="like" />
                    &nbsp;&nbsp;
                        <img src={share} style={{width: '20px', height:'20px' }}alt="send" />
                    <p>{prop.pass.likes} likes</p>
                </div> 
                <div className="date">{prop.pass.date}</div>
                <div className="text">{prop.pass.description}</div>
            </div>
            <br></br>
        </>
    );
};

export default Card;
