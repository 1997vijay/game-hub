import { ButtonGroup, Button, Flex } from '@chakra-ui/react'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'
interface Props {
    onNext:()=>void,
    onPrevious:()=>void,
    isDisabled:boolean
}
const NextPage = ({onNext,onPrevious,isDisabled}:Props) => {
  return (
    <Flex marginBottom={'25px'}>
    <ButtonGroup textAlign={'center'} spacing={'20px'} marginLeft={'45px'} >
        <Button onClick={()=>onPrevious()} leftIcon={<BsFillArrowLeftSquareFill/>} isDisabled={isDisabled}/>
        <Button onClick={()=>onNext()} rightIcon={<BsFillArrowRightSquareFill/>} />
    </ButtonGroup>
    </Flex>
  )
}

export default NextPage