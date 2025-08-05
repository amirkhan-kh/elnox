import React from 'react'
import FadeContent from '../ui/fade-content'
import { Home } from './home'
import { Skills } from './skills'
import { Projects } from './projects'

export const About = () => {
  return (
   <div className="mx-auto container py-6 px-0 md:px-5.5 ">
     <FadeContent
        blur={true}
        duration={800}
        easing="ease-out"
        initialOpacity={0}
      >
        <Home />
        <Skills/>
        <Projects/>
        
      </FadeContent>
    </div>
  )
}
