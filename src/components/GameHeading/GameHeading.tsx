import { Button, Flex, HStack, Heading } from "@chakra-ui/react"
import { AiOutlineClear } from 'react-icons/ai'

interface Props{
    headingText:string,
    searchText:string
}
const GameHeading = ({headingText,searchText}:Props) => {

    if(searchText!=='') return (
      <>
        <HStack spacing={5}>
        <Heading paddingLeft={10} paddingY={5} as='h2'>Search result for : {searchText}</Heading>
        </HStack>
      </>
    )
  if(headingText!=='') return <Heading as={'h1'} paddingLeft={10} paddingY={5} >{headingText}</Heading>

}

export default GameHeading