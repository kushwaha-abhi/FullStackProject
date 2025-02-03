
import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import SlideBar from './components/slideBar/SlideBar.jsx'
const App = () => {
  return (
    <div>
      <Navbar/>
        <hr/>
       <div className="app-content">
          <SlideBar/>
       </div>
    </div>
  )
}

export default App