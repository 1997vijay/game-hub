import { HStack, Heading } from "@chakra-ui/react"


interface Props{
    headingText:string,
    searchText:string
}
const GameHeading = ({headingText,searchText}:Props) => {

  if(searchText!=='') return<Heading paddingLeft={10} paddingY={5} as='h2'>Search result for : {searchText}</Heading>
  if(headingText!=='') return <Heading as={'h1'} paddingLeft={10} paddingY={5} >{headingText}</Heading>
  return null;
}

export default GameHeading