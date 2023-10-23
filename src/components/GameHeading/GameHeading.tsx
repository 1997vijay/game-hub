import { Heading } from "@chakra-ui/react"
import { useState } from "react"

interface Props{
    headingText:string,
    searchText:string
}
const GameHeading = ({headingText,searchText}:Props) => {

    if(searchText!=='') return <Heading paddingLeft={10} paddingY={5} as='h1'>Search result for : {searchText}</Heading>
  if(headingText!=='') return <Heading as={'h1'} paddingLeft={10} paddingY={5} >{headingText}</Heading>

}

export default GameHeading