import React from 'react'
import tw from 'tailwind-styled-components'
import Link from 'next/link'
import { useState } from 'react'

const Search = () => {
  const [pickup, setpickup] = useState('')
  const [dropoff, setdropoff] = useState('')
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/">
          <Backbutton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Sqare src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FromToIcons>
        <InputBoxes>
          <Input
            placeholder="Enter pickup location"
            value={pickup}
            onChange={(e) => setpickup(e.target.value)}
          />
          <Input
            placeholder="Where to?"
            value={dropoff}
            onChange={(e) => setdropoff(e.target.value)}
          />
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>
      <SavePlaces>
        <StartIcons src="https://img.icons8.com/ios/50/ffffff/star--v1.png" />
        Saved Places
      </SavePlaces>
      <Link
        href={{
          pathname: '/confirm',
          query: {
            pickup: pickup,
            dropoff: dropoff,
          },
        }}
      >
        <ConfirmButton>Confirm Locations</ConfirmButton>
      </Link>
    </Wrapper>
  )
}

export default Search

const Wrapper = tw.div`
bg-gray-200
h-screen
`

const ButtonContainer = tw.div`
bg-white
h-10
px-4
`
const Backbutton = tw.img`
h-12
cursor-pointer
`

const InputContainer = tw.div`
bg-white
flex
items-center
px-4
`
const FromToIcons = tw.div`
w-10
flex
flex-col
m-2
items-center
`
const Circle = tw.img`
h-2.5

`
const Line = tw.img`
h-10
`
const Sqare = tw.img`
h-3

`

const InputBoxes = tw.div`
flex
flex-col
flex-1
`
const Input = tw.input`
h-10
bg-gray-200
my-2
rounded-2
p-2
outline-none
border-none
capitalize
`

const PlusIcon = tw.img`
w-10
h-10
bg-gray-200
rounded-full
ml-3
`

const SavePlaces = tw.div`
flex
items-center
bg-white
px-4
py-2
my-1
`
const StartIcons = tw.img`
bg-gray-400
h-10
p-2
rounded-full
mr-2
`

const ConfirmButton = tw.div`
bg-black
text-white
text-center
my-2
mx-4
px-4
py-3
text=2xl
cursor-pointer

`
