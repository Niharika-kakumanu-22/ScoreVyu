import React from 'react'
import NavBar from "./NavBar"
import DoughnutChart from './DoughnutChart'
import LineChart from './LineChart'

import BarChart from './BarChart'

const Graphs = () => {

  
  return (
      <div>
      <NavBar /> 
      <div className=' font-bold text-lg'>DOUGHNUT-CHART</div>
      <DoughnutChart />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='font-bold text-lg'>LINE-CHART</div>
      <LineChart />
      <div className='font-bold text-lg'>BAR-CHART</div>
      <BarChart />
    </div>
  )
}

export default Graphs

