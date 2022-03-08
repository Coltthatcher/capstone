import React from 'react'
import HomeSection from '../../HomeSection'
import Pricing from '../../Pricing'
import {homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data'


function Home() {
  return (
    <React.Fragment>
      <HomeSection {...homeObjOne} />
      <HomeSection {...homeObjTwo} />
      <HomeSection {...homeObjThree} />
      <Pricing />
      <HomeSection {...homeObjFour} />
    </React.Fragment>
  )
}

export default Home