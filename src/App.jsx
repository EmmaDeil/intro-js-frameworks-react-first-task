// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard'
import David from './assets/DevDavid.jpeg'
import Lawyer from './assets/lawyer.jpg'
// import ContentCreator from './assets/Content-Creator.png'

function App() {


  return (
    <div className="app-container">
      <ProfileCard
        name="David Emmanuel"
        image={Images}
        description="Full Stack Developer passionate about modern web technologies and design."
      />
      <ProfileCard
        name="Honourable Layi"
        image={Lawyer}
        description="UI/UX Designer with a keen eye for usability and aesthetics."
      />
      <ProfileCard
        name="Kagan"
        image={ContentCreator}
        description="Mobile App Engineer building seamless cross-platform experiences."
      />
    </div>
  )
}

export default App
