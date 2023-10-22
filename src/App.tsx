import { Grid, GridItem,Show } from '@chakra-ui/react'
import Navbar from './components/Navigation/Navbar'
import GameGrid from './components/GameGrid/GameGrid'
import GenreList from './components/GenreList/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/use-Genre'
import PlatformList from './components/GameCard/PlatformList'
import PlatformSelector from './components/PlateformSelector/PlatformSelector'


function App() {
  const [selectedGenre,setSelectedGenre]=useState<Genre | null>(null)

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`, /* for small devices */
      lg: `"nav nav" "aside main"`, /* for large devices */
    }}
    templateColumns={{
      base: '1fr',
      lg:'200px 1fr'
    }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem area="aside" paddingX={4}>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=>setSelectedGenre(genre)}/>
        </GridItem>
      </Show>
      <GridItem area="main" >
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  )
}

export default App
