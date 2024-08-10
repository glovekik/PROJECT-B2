import React from 'react';
import logo from './images/logo.jpg';
import { callApi, errorResponse, setSession } from './main';
import './login.css';

const popupwindowstyle = { width: '300px', height: '450px', background: 'white' };
const logostyle = { width: '150px', height: '75px', position: 'absolute', left: '85px', top: '10px' };
const logodivstyle = { height: '100px' };
const space = { height: '10px' };

function Login() {
    window.onload = function () {
        const login = document.getElementById('login');
        login.style.display = 'block';
    };

    function validate() {
        const T1 = document.getElementById('T1');
        const T2 = document.getElementById('T2');
        const role = document.getElementById('role').value;

        if (role === '') {
            alert("Please select a role");
            return;
        }

        const url = 'http://localhost:5000/login/signin';
        const data = JSON.stringify({
            emailid: T1.value,
            pwd: T2.value,
            role: role,
        });

        callApi('POST', url, data, loginSuccess, errorResponse);
    }

    function loginSuccess(res) {
        const data = JSON.parse(res);
        if (data.success) {
            setSession('sid', data.session_id, 24 * 60);
            window.location.replace('/home');
        } else {
            alert('Invalid credentials or role mismatch');
        }
    }

    function registration() {
        document.getElementById('login').style.display = 'none';
        document.getElementById('registration').style.display = 'block';
    }

    function register() {
        const RT1 = document.getElementById('RT1');
        const RT2 = document.getElementById('RT2');
        const RT3 = document.getElementById('RT3');
        const RT4 = document.getElementById('RT4');
        const RT5 = document.getElementById('RT5');
        const RT6 = document.getElementById('RT6');
        const RT7 = document.getElementById('RT7'); // Role input

        if (!RT1.value || !RT2.value || !RT3.value || !RT4.value || !RT5.value || !RT6.value) {
            alert("All fields are required");
            return;
        }

        if (RT5.value !== RT6.value) {
            alert("Passwords do not match");
            return;
        }

        if (RT7.value === '') {
            alert("Please select a role");
            return;
        }

        const url = 'http://localhost:5000/registration/signup';
        const data = JSON.stringify({
            firstname: RT1.value,
            lastname: RT2.value,
            contactno: RT3.value,
            emailid: RT4.value,
            pwd: RT5.value,
            role: RT7.value, // Role
        });

        callApi('POST', url, data, registeredSuccess, errorResponse);

        document.getElementById('registration').style.display = 'none';
        document.getElementById('login').style.display = 'block';
    }

    function registeredSuccess(res) {
        alert(res);
    }

    return (
        <div className='full-height'>
            <div id='header' className='loginheader'>Art Gallery</div>
            <div id='content' className='logincontent'>
                <div id='login' className='popup'>
                    <div id='popupwindow' className='popupwindow' style={popupwindowstyle}>
                        <div className='loginstyle1'>Login</div>
                        <div className='loginstyle2'>
                            <div style={logodivstyle}>
                                <img src={logo} alt='' style={logostyle} />
                            </div>
                            <div>User</div>
                            <div><input type='text' id='T1' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Password</div>
                            <div><input type='password' id='T2' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Role</div>
                            <div>
                                <select id='role' className='selectbox'>
                                    <option value=''>Select Role</option>
                                    <option value='admin'>Admin</option>
                                    <option value='art_gallery_owner'>Art Gallery Owner</option>
                                    <option value='customer'>Customer</option>
                                </select>
                            </div>
                            <div style={space}></div>
                            <div><button className='btn' onClick={validate}>Log In</button></div>
                            <div style={space}></div>
                            <div>New user? <label className='linklabel' onClick={registration}>Register here</label></div>
                        </div>
                    </div>
                </div>
                <div id='registration' className='popup'>
                    <div id='registrationwindow' className='popupwindow' style={popupwindowstyle}>
                        <div className='loginstyle1'>New Registration</div>
                        <div className='loginstyle2'>
                            <div>First Name*</div>
                            <div><input type='text' id='RT1' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Last Name*</div>
                            <div><input type='text' id='RT2' class='txtbox' /></div>
                            <div style={space}></div>
                            <div>Contact Number*</div>
                            <div><input type='text' id='RT3' class='txtbox' /></div>
                            <div style={space}></div>
                            <div>Email ID*</div>
                            <div><input type='text' id='RT4' class='txtbox' /></div>
                            <div style={space}></div>
                            <div>Password*</div>
                            <div><input type='password' id='RT5' class='txtbox' /></div>
                            <div style={space}></div>
                            <div>Re-type Password*</div>
                            <div><input type='password' id='RT6' class='txtbox' /></div>
                            <div style={space}></div>
                            <div>Role*</div>
                            <div>
                                <select id='RT7' className='selectbox'>
                                    <option value=''>Select Role</option>
                                    <option value='admin'>Admin</option>
                                    <option value='art_gallery_owner'>Art Gallery Owner</option>
                                    <option value='customer'>Customer</option>
                                </select>
                            </div>
                            <div style={space}></div>
                            <div><button className='btn' onClick={register}>Register</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='footer' className='loginfooter'>Copyright @ Art Gallery. All rights reserved.</div>
        </div>
    );
}

export default Login;
