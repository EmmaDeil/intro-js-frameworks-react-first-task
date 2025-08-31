// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard'

function App() {


  return (
    <div className="app-container">
      <ProfileCard
        name="David Emmanuel"
        image="./assets/DevDavid.jpeg"
        description="Full Stack Developer passionate about modern web technologies and design."
      />
      <ProfileCard
        name="Honourable Layi"
        image="./assets/lawyer.jpg"
        description="UI/UX Designer with a keen eye for usability and aesthetics."
      />
      <ProfileCard
        name="Kagan"
        image="./assets/Content-Creator.png"
        description="Mobile App Engineer building seamless cross-platform experiences."
      />
    </div>
  )
}

export default App
