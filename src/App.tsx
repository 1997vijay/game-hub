import { Grid, GridItem,Show } from '@chakra-ui/react'
import Navbar from './components/Navigation/Navbar'
import GameGrid from './components/GameGrid/GameGrid'
import GenreList from './components/GenreList/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/use-Genre'


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
          <GenreList onSelectGenre={(genre)=>setSelectedGenre(genre)}/>
        </GridItem>
      </Show>
      <GridItem area="main" >
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  )
}

export default App
