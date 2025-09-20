import React from 'react'
import mobile from '../assets/mobiles.png'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className='LandingPageContainer'>
        <nav>
          <div className="navHeader">
            <h2>EchoLink</h2>
          </div>
          <div className="navList">
            <p>Guest</p>
            <p>Register</p>
            <div role='button'>
              <p>Login</p>
            </div>
          </div>
        </nav>

        <div className="LandingMainContainer">
          <div>
            <h1><span style={{color:" rgb(245, 119, 0)"}}>Connect</span> with your loved ones</h1>
            <p>Cover distance by EchoLink</p>
            <div role='button'>
              <Link to={"/auth"}>Get Started</Link>
            </div>
          </div>
          <div>
            <img src={mobile} alt="" />
          </div>
        </div>
    </div>
  )
}
