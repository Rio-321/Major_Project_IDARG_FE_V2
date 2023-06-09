import React from "react";
import '../style/UploadResume.css'

const UploadResume = () => {
    return (

        <div class="big-wrapper light">
            <img src="./img/shape.png" alt="" class="shape" />

            <header>
                <div class="container">
                    <div class="logo">
                        <a href="/"><img src="./img/logo.png" alt="Logo" /></a>
                        <a href="/">
                            <h3>IDARG</h3>
                        </a>
                    </div>

                    <div class="links">
                        <ul>
                            <li><a href="/dashboard">Are you hiring?</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="./index2.html" class="btn">Login</a></li>
                            <li>
                                <button class="toggle-btn">
                                    <i class="far fa-moon"></i>
                                    <i class="far fa-sun"></i>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div class="overlay"></div>

                    <div class="hamburger-menu">
                        <div class="bar"></div>
                    </div>
                </div>
            </header>

            <div class="showcase-area">
                <div class="container1">
                    <div class="wrapper">

                        <div class="title"><span>Upload Your Resume</span></div>
                        <form action="#">

                            <div class="row">
                                {/* <!-- <i class="fas fa-lock"></i> --> */}
                                {/* <!-- <label for="myfile">Select a file:</label> --> */}
                                <input type="file" id="myfile" name="myfile" />
                                {/* <!-- <input type="file" placeholder="Password" required> --> */}
                            </div>
                            <div class="pass"><a href="./index3.html">Form</a></div>
                            <div class="row button">
                                <input type="submit" value="Submit File" />
                                {/* <!-- <input type="submit" value="Submit File"> --> */}
                            </div>

                            {/* <!-- <div class="signup-link">Not a member? <a href="#">Signup now</a></div> --> */}
                        </form>
                    </div>
                </div>
            </div>

            {/* <div class="bottom-area">
                <div class="container">
                    <button class="toggle-btn">
                        <i class="far fa-moon"></i>
                        <i class="far fa-sun"></i>
                    </button>
                </div>
            </div>  */}
        </div>
    )
}

export default UploadResume

