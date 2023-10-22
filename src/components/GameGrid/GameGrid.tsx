import { SimpleGrid } from '@chakra-ui/react'
import useGames from '../../hooks/useGames'
import GameCard from '../GameCard/GameCard'
import GameCardSkelaton from '../GameCard/GameCardSkelaton'

const GameGrid = () => {
    const {data,error,isLoading}=useGames()
    const skeleton=[1,2,3,4,5,6]

  return (
    <div>
        {error && <p>{error}</p>}
        <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} padding={10} spacing={10}>
            {isLoading && skeleton.map(s=><GameCardSkelaton key={s}/>)}
            {data.map(game=><GameCard key={game.id} game={game} />)}
        </SimpleGrid>
    </div>
  )
}

export default GameGrid