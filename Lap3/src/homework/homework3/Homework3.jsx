import React,{useState} from "react";
import "./Homework3.css";
import logo from "./img/cat.png"

function Homework3(){
    const [changeColor,setChangeColor] = useState('');
    console.log({ changeColor });
    return(
        <div class="container">
            <div class="profile">
                <div class="text-header">
                    <div class="title">Profile</div>
                    <div>I'm a student</div>
                </div>
                <hr/>
                    <div class="body-container">
                        <div class="about-me-container">
                            <div class="about-me">About me</div>
                            <div>I am a lovely cat. I have passion in IT and I want to become data analyst</div>
                        </div>
                        <div class="img-container">
                            <img src={logo} alt=""/>
                        </div>
                        <div class="details-container">
                            <div class="details">Details</div>
                            <div>
                                <h5>Name:</h5>
                                Trần văn Boss
                                <h5>Age:</h5>
                                5 years
                                <h5>Location:</h5>
                                UIT , VNU - HCM
                            </div>
                        </div>
                    </div>
            </div>
            <nav>
                <ul>
                    <li onClick={()=>{setChangeColor('1')}} ><a href="#">
                        Profile
                    </a></li>
                    <li onClick={() => setChangeColor('2')}><a href="#">
                        Experiences
                    </a></li>
                    <li onClick={() => setChangeColor('3')}><a href="#">
                        Abilities
                    </a></li>
                    <li onClick={() => setChangeColor('4')}><a href="#">
                        Projects
                    </a></li>
                    <li onClick={() => setChangeColor('5')}><a href="#">
                        Contact
                    </a></li>
                </ul>
            </nav>
            
    </div>
    );
}

export default Homework3;