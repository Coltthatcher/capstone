import React from 'react'
import HomeSection from '../../HomeSection'
import {homeObjOne} from './Data'


function Home() {
  return (
    <React.Fragment>
      <HomeSection {...homeObjOne} />
    </React.Fragment>
  )
}

export default Home