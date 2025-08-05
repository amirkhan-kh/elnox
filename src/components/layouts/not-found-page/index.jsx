import React from 'react'
import FuzzyText from '../../ui/not-found'

const NotFoundPage = () => {
  return (
     <div className='grid place-content-center w-full min-h-screen'>
        <FuzzyText baseIntensity={0.2} hoverIntensity={0.3} enableHover={true}>
            404
        </FuzzyText>
      </div>
  )
}

export default NotFoundPage
