import React from 'react'
import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './Components/map'
import { useRouter } from 'next/router'
import RideSelector from './Components/rideSelector'
import Link from 'next/link'

const Confirm = () => {
  const router = useRouter()
  const { pickup, dropoff } = router.query

  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0])
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0])

  // const getFormatCordinateData = (data) => {
  //   const {
  //     data: { features },
  //   } = data
  //   const center = features[0]
  //   return center
  // }

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1IjoiYmlsbGJvYWgiLCJhIjoiY2wybmoyeGFtMTdsajNvcGs3Mnc3am90NCJ9.FT5UVt4lOypQQfet1kc58A',
          limit: 1,
        }),
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center)
      })
  }

  const getDropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1IjoiYmlsbGJvYWgiLCJhIjoiY2wybmoyeGFtMTdsajNvcGs3Mnc3am90NCJ9.FT5UVt4lOypQQfet1kc58A',
          limit: 1,
        }),
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center)
      })
  }

  useEffect(() => {
    getPickupCoordinates(pickup)
    getDropoffCoordinates(dropoff)
  }, [])

  return (
    <Wrapper>
      <ButtonConainer>
        <Link href="/search">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonConainer>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm Uber X</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  )
}

export default Confirm

const ButtonConainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`

const BackButton = tw.img`
h-full object-container
`

const Wrapper = tw.div`
flex
flex-col
h-screen
`

const RideContainer = tw.div`
flex-1
flex
flex-col
h-1/2
`
const ConfirmButtonContainer = tw.div`
border-t-2
`
const ConfirmButton = tw.div`
bg-black
text-white
m-4
py-4
text-center
`
