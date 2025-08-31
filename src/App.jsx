// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard'
import Image1 from './assets/DevDavid.jpeg'
import Image2 from './assets/lawyer.jpg'
import Image3 from './assets/Conent-Creator.png'

function App() {

  return (
    <div className="app-container">
      <ProfileCard
        name="David Emmanuel"
        image={Image1}
        description="Full Stack Developer passionate about modern web technologies and design."
      />
      <ProfileCard
        name="Honourable Layi"
        image={Image2}
        description="UI/UX Designer with a keen eye for usability and aesthetics."
      />
      <ProfileCard
        name="Kagan"
        image={Image3}
        description="Mobile App Engineer building seamless cross-platform experiences."
      />
    </div>
  )
}

export default App;
