import React from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'
import { useEffect, useState } from 'react'

const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0)

  //Get ride duration from mapbox api
  useEffect(() => {
    async function getride() {
      const res = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYmlsbGJvYWgiLCJhIjoiY2wybmoyeGFtMTdsajNvcGs3Mnc3am90NCJ9.FT5UVt4lOypQQfet1kc58A`,
      )
      const data = await res.json()
      let duration = data.routes[0].duration
      setRideDuration(duration / 100)
    }
    getride()
  }, [pickupCoordinates, dropoffCoordinates])

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more </Title>
      <Carlist>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <Price>{'$' + (rideDuration * car.multiplier).toFixed(2)}</Price>
          </Car>
        ))}
      </Carlist>
    </Wrapper>
  )
}

export default RideSelector

const Wrapper = tw.div`
flex-1
overflow-y-scroll
flex
flex-col
`

const Title = tw.div`
text-gray-500
text-center
text-xs
py-2
border-b
`
const Carlist = tw.div`
overflow-y-scroll
`

const Car = tw.div`
flex
p-4
items-center
`
const CarImage = tw.img`
h-14
mr-4
`
const CarDetails = tw.div`
flex-1
`
const Service = tw.div`
font-medium
`
const Time = tw.div`
text-xs
text-blue-500
`
const Price = tw.div`
text-sm
`
