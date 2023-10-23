import { Button, ButtonGroup, HStack, SimpleGrid } from '@chakra-ui/react'
import useGames, { Platform } from '../../hooks/useGames'
import GameCard from '../GameCard/GameCard'
import GameCardSkelaton from '../GameCard/GameCardSkelaton'
import { Genre } from '../../hooks/use-Genre'
import { Text} from '@chakra-ui/react'
import { BsFillArrowLeftSquareFill, BsFillArrowRightCircleFill, BsFillArrowRightSquareFill } from 'react-icons/bs'

interface Props{
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  selectdSortOrder: string,
  searchText:string,
  selectPageNumber:number,
  onLoadCount:(PageCount:number)=>void
}


const GameGrid = ({selectedGenre,selectedPlatform,selectdSortOrder,searchText,selectPageNumber,onLoadCount}:Props) => {
    const {data,pageCount,error,isLoading}=useGames(selectedGenre,selectedPlatform,selectdSortOrder,searchText,selectPageNumber)
    const skeleton=[1,2,3,4,5,6,7,8]

    if(error) return <Text>{error}</Text>

  return (
        <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} padding={10} spacing={4} onLoad={()=>onLoadCount(pageCount)}>
            {isLoading && skeleton.map(s=><GameCardSkelaton key={s}/>)}
            {data.map(game=><GameCard key={game.id} game={game} />)}
        </SimpleGrid>
  )
}

export default GameGrid