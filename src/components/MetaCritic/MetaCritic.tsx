import { Badge } from '@chakra-ui/react'
import React from 'react'

interface Props{
    score:number
}

const MetaCritic = ({score}:Props) => {
    let color=score > 75 ? 'green' :score >60 ? 'yellow' :'red'
  return (
   <Badge fontSize={'15px'} borderRadius={'5px'} colorScheme={color}>
        {score}
   </Badge>
  )
}

export default MetaCritic