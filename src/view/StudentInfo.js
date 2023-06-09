import React from "react";
import '../assets/style/StudentInfo.css'

import { logoImage, PROJECT_NAME } from '../imports'

const StudentInfo = () => {
    return (
        <div class="big-wrapper light">
            <header>
                <div class="container">
                    <div class="logo">
                        <a href="/"><img src={logoImage} alt="Logo" /></a>
                        <a href="/"><h3>{PROJECT_NAME}</h3></a>
                    </div>

                    <div class="links">
                        <ul>
                            <li><a href="/companydashboard">Are you hiring?</a></li>
                            <li><a href="/aboutus">About Us</a></li>
                            <li><a href="/contactus">Contact Us</a></li>
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

            <div class="login-root">
                {/* <!-- <h1 style="color: black;">swaraj bhosle</h1> --> */}
                <div class="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh', flexGrow: '1' }}>

                    <div class="box-root padding-top--24 flex-flex flex-direction--column"
                        style={{ flexGrow: '1', zIndex: '9' }}>
                        <div class="box-root padding-top--24 padding-bottom--24 flex-flex flex-justifyContent--center">
                            <h1><a href="#" rel="dofollow">{PROJECT_NAME}</a></h1>
                        </div>
                        <div class="formbg-outer">
                            <div class="formbg-first">
                                <div class="formbg-inner padding-horizontal--48">
                                    {/* <span class="padding-bottom--15">Check your details</span>  */}
                                    <form id="stripe-login">

                                        <div class="field padding-bottom--24">
                                            <h3 style={{ marginTop: '0px', color: 'brown' }}>Personal Information</h3>
                                        </div>

                                        <div class="horizontal-group">
                                            <div class="field padding-bottom--24 left">
                                                <label for="name">First Name</label>
                                                <input type="name" name="name" />
                                            </div>

                                            <div class="field padding-bottom--24 right">
                                                <label for="name">Last Name</label>
                                                <input type="name" name="name" />
                                            </div>
                                        </div>


                                        <div class="field padding-bottom--24">
                                            <label for="email" style={{ marginTop: '100px' }}>Email</label>
                                            <input type="email" name="email" />
                                        </div>

                                        <div class="field padding-bottom--24" >
                                            <label for="phone">Phone Number</label>
                                            <input type="phone" name="phone" />
                                        </div>

                                        <div id="karan">
                                            <div class="field padding-bottom--24">
                                                <label for="gender">Gender</label>
                                                {/* <!-- <input type="email" name="gender"> --> */}
                                                <select name="gender" id="gender">
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                            </div>
                                        </div>


                                        {/* <!-- <div class="field padding-bottom--24" id="addeducation">
                                            <a href="#" id="filldetails" onclick="addFields()">Add Education</a>
                                            <button onclick="addFields()" > Add Education</button>
                                        </div> --> */}



                                        <div class="field padding-bottom--24">
                                            <h3 style={{ marginTop: "50px", color: "brown" }}>Graduation</h3>
                                        </div>

                                        <div class="field padding-bottom--24">
                                            <label for="college">College Name</label>
                                            <input type="college" name="college" />
                                        </div>

                                        <div class="field padding-bottom--24">
                                            <label for="college">Degree</label>
                                            <input type="Degree" name="degree" />
                                        </div>

                                        <div class="field padding-bottom--24">
                                            <label for="email">CGPA</label>
                                            <input type="email" name="email" style={{ width: '30%' }} />
                                        </div>

                                        <div class="field padding-bottom--24">
                                            <h3 style={{ marginTop: '50px', color: 'brown' }}>Highschool</h3>
                                        </div>

                                        <div class="field padding-bottom--24">
                                            <label for="email">Highschool Name</label>
                                            <input type="email" name="email" />
                                        </div>

                                        <div class="field padding-bottom--24">
                                            <label for="email">Marks</label>
                                            <input type="email" name="email" style={{ width: '30%' }} />
                                        </div>

                                        <div class="field padding-bottom--24">
                                            <h3>School</h3>
                                        </div>

                                        <div class="field padding-bottom--24">
                                            <label for="email">School Name</label>
                                            <input type="text" name="email" />
                                        </div>

                                        <div class="field padding-bottom--24">
                                            <label for="email">Marks</label>
                                            <input type="email" name="email" style={{ width: '30%' }} />
                                        </div>


                                        <div class="field padding-bottom--24">
                                            <h3 style={{
                                                marginTop: '50px',
                                                color: 'brown'
                                            }}>Skills</h3>
                                        </div>

                                        <div class="horizontal-group">
                                            <div class="field padding-bottom--24" style={{
                                                float: 'left',
                                                width: '20%', // please check here for margin
                                            }}>
                                                {/* <!-- <label for="name">One</label> --> */}
                                                <input type="name" name="name" />
                                            </div>

                                            <div class="field padding-bottom--24 right" style={{
                                                float: 'left',
                                                width: '20%',
                                                marginLeft: '50px'
                                            }}>
                                                {/* <!-- <label for="name">Two</label> --> */}
                                                <input type="name" name="name" />
                                            </div>

                                            <div class="field padding-bottom--24 right" style={{
                                                float: 'left',
                                                width: '20%',
                                                marginLeft: '50px'
                                            }}>
                                                {/* <!-- <label for="name">Three</label> --> */}
                                                <input type="name" name="name" />
                                            </div>

                                            <div class="field padding-bottom--24 right" style={{
                                                float: 'left',
                                                width: '20%',
                                                marginLeft: '50px'
                                            }
                                            }>
                                                {/* <!-- <label for="name">Four</label> --> */}
                                                <input type="name" name="name" />
                                            </div>

                                        </div>

                                        {/* <!-- <div class="field padding-bottom--24">
                                            <label for="email">Python</label>
                                            <input type="email" name="email">
                                            <input type="email" name="email">
                                        </div> --> */}

                                        <div class="field padding-bottom--24">
                                            <label for="email" style={{ marginTop: "100px" }}>Total Experience</label>
                                            <input type="email" name="email" />
                                        </div>

                                        <div class="field">
                                            <a class="ssolink" href="#">please recheck your information</a>
                                        </div> 
                                    </form>
                                </div>
                            </div>

                            <div class="formbg-second">
                                <div class="formbg-inner padding-horizontal--48">
                                    {/* <span class="padding-bottom--15">Check your details</span>  */}
                                    <form id="stripe-login">

                                        <div class="field padding-bottom--24">
                                            <h3 style={{ marginTop: '0px', color: 'brown' }}>Want to SignUp</h3>
                                        </div>

                                        <div class="field padding-bottom--24">
                                            <div class="grid--50-50">
                                                <label for="password">Password</label>
                                                {/* <!-- <div class="reset-pass">
                                                    <a href="#">Forgot your password?</a>
                                                </div> --> */}
                                            </div>
                                            <input type="password" name="password" />
                                        </div>
                                        

                                        <div class="field field-checkbox padding-bottom--24 flex-flex align-center">
                                            <label for="checkbox">
                                                <input type="checkbox" name="checkbox" /> i agree to all the Terms and Conditions.
                                            </label>
                                        </div>

                                        <div class="field field-checkbox padding-bottom--24 flex-flex align-center">
                                            <label for="checkbox">
                                                <input type="checkbox" name="checkbox" /> i want to signup to the site....
                                            </label>
                                        </div>

                                        <div class="field padding-bottom--24">
                                            <input type="submit" name="submit" value="Signup" />
                                        </div>
                                        <div class="pass"><a href="/studentdashboard">go to dashboard</a></div>
                                        {/* <!-- <div class="field">
                                            <a class="ssolink" href="#">Use single sign-on (Google) instead</a>
                                        </div> --> */}
                                    </form>
                                </div>
                            </div>
                            <div class="footer-link padding-top--24">
                                {/* <span>Don't have an account? <a href="">Sign up</a></span> */}
                                <div class="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                                    <span><a href="#">©{PROJECT_NAME} </a></span>
                                    <span><a href="/contactus">Contact</a></span>
                                    <span><a href="#">Privacy & terms</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default StudentInfo