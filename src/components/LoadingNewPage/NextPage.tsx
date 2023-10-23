import { ButtonGroup, Button, Flex,Text } from '@chakra-ui/react'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'
interface Props {
    onNext:()=>void,
    onPrevious:()=>void,
    isDisabled:boolean,
    showPageCount:number,
    currentPageNumber:number
}
const NextPage = ({onNext,onPrevious,isDisabled,showPageCount,currentPageNumber}:Props) => {
  return (
    <Flex marginBottom={'25px'} justifyContent={'space-between'}>
    <ButtonGroup textAlign={'center'} spacing={'20px'} marginLeft={'45px'} >
        <Button onClick={()=>onPrevious()} leftIcon={<BsFillArrowLeftSquareFill/>} isDisabled={isDisabled}/>
        <Button onClick={()=>onNext()} rightIcon={<BsFillArrowRightSquareFill/>} />
    </ButtonGroup>
    <Text marginRight={'100px'}>Page: {currentPageNumber} / {showPageCount}</Text>
    </Flex>
  )
}

export default NextPage