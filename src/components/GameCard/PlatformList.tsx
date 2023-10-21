import {FaWindows,FaXbox,FaPlaystation,FaLinux,FaAndroid,FaApple} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'

import { Platform } from '../../hooks/useGames'
import { HStack, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface Props{
    platforms:Platform[]
}

const PlatformList = ({platforms}:Props) => {
    const IconMap:{[key:string]:IconType}={
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        mac:FaApple,
        linux:FaLinux,
        ios:MdPhoneIphone,
        web:BsGlobe,
        android:FaAndroid,
        nintendo:SiNintendo
    }
  return (
    <HStack marginY={1}>
        {platforms.map((platform)=><Icon as={IconMap[platform.slug]} color={'gray.500'} marginTop={2} />)}
    </HStack>
  )
}

export default PlatformList