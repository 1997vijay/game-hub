import {HStack,Image,Text} from '@chakra-ui/react'
import logo from '../../assets/logo.webp'
import ColorModeWsitch from '../ColorModeSwitch/ColorModeWsitch'
import SearchInput from '../SearchInput/SearchInput'

const Navbar = () => {
  return (
    <HStack padding={'15px'}>
        <Image src={logo} boxSize='60px'></Image>
        <SearchInput />
        <ColorModeWsitch />
    </HStack>
  )
}

export default Navbar