import { SimpleGrid } from '@chakra-ui/react'
import useGames, { Platform } from '../../hooks/useGames'
import GameCard from '../GameCard/GameCard'
import GameCardSkelaton from '../GameCard/GameCardSkelaton'
import { Genre } from '../../hooks/use-Genre'
import { Text} from '@chakra-ui/react'

interface Props{
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
}


const GameGrid = ({selectedGenre,selectedPlatform}:Props) => {
    const {data,error,isLoading}=useGames(selectedGenre,selectedPlatform)
    const skeleton=[1,2,3,4,5,6,7,8]

  return (
    <div>
        {error && <p>{error}</p>}
        {data.length===0 && <Text fontSize={'lg'} color={'red'}>No Game found</Text>}
        <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} padding={10} spacing={4}>
            {isLoading && skeleton.map(s=><GameCardSkelaton key={s}/>)}
            {data.map(game=><GameCard key={game.id} game={game} />)}
        </SimpleGrid>
    </div>
  )
}

export default GameGrid