import React from 'react'
import HomeSection from '../../HomeSection'
import {homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data'


function Home() {
  return (
    <React.Fragment>
      <HomeSection {...homeObjOne} />
      <HomeSection {...homeObjThree} />
      <HomeSection {...homeObjTwo} />
      <HomeSection {...homeObjFour} />
    </React.Fragment>
  )
}

export default Home