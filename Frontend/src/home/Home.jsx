import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import Freebook from '../component/Freebook'
import Footer from '../component/Footer'

function Home() {
    return (
        <>
        {/* <h1>Hare Krsna</h1> */}
          <Navbar/>
          <Banner/>
          <Freebook/>
          <Footer/>
    
        </>
      )
}

export default Home