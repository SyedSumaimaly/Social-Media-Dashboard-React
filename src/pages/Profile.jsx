import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import './Profile.css'

function Profile() {
    return (
        <>
            <Navbar />
            <div className='profile d-flex justify-content-center'>
                <div className='mainP'>
                    <div className="profile-photo">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLzXD140wCYEKBSqQq9hBF1QEVY3YZ39GqEA&usqp=CAU" alt="" />
                    </div>
                    <div className="profile-credentials">
                        <div className='username'>
                            Username: <span>SyedSumaimAly</span>
                        </div>
                        <div className='email'>
                            Email: <span>syedsumaimaly08@gmail.com</span>
                        </div>
                        <div className='city'>
                            City: <span>Karachi</span>
                        </div>
                        <div className='tagline'>
                            Tagline: <span>Software Engineer || Youtuber || Blogger</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Profile