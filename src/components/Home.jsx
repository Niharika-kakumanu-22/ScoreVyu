import React from 'react'
import NavBar from "./NavBar"
import { About } from './About';

export default function Home() {

  return (
    <>
    <div>
        <NavBar />
        <div>
          <About/>
        </div>
      </div>
      </>
  )
}


