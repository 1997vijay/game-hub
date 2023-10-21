import React from 'react'
import {HStack,Image,Text} from '@chakra-ui/react'
import logo from '../../assets/logo.webp'
import ColorModeWsitch from '../ColorModeSwitch/ColorModeWsitch'

const Navbar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={'15px'}>
        <Image src={logo} boxSize='60px'></Image>
        <Text>Home</Text>
        <ColorModeWsitch />
    </HStack>
  )
}

export default Navbar