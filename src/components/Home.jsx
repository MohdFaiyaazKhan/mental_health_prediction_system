import React from 'react'
import "../styles/Home.scss"
import "../styles/About.scss"
import "../styles/Ques.scss"
import Ques from "../components/Ques"
import About from "../components/About"
import vg from "../assets/22.webp"
import dots from "../assets/dots.webp"

const Home = () => {
  return (


    <>

    <div className='home' >
      <img id='robo' src={vg} alt='Graphics' />
      <img id='dots' src={dots} alt='Graphics' />
      <div>
        <h1 id='heroHeading'>Predict your mental health!</h1>
      </div>
    </div>

    <About/>

    <Ques/>

    </>
  )
  
}

export default Home
