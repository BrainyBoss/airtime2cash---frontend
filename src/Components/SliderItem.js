import React from 'react'
import Carousel from 'react-elastic-carousel'
import { TestimonialCard } from '../styles/LandingPageStyle'

const breakPoints = [
    {width:1, itemsToShow:1},
    {width:550, itemsToShow:2},
    {width:768, itemsToShow:3},
    {width:1200, itemsToShow:4},
]

const SliderItem = ({slideData}) => {
  return (
    <Carousel breakPoints={breakPoints} pagination={false}>
      {slideData.map((item, index) => (
        <TestimonialCard key={index}>
        <h3>{item.name}</h3>
        <p>{item.message}</p>
       </TestimonialCard>
      ))}
    </Carousel>
  )
}

export default SliderItem
