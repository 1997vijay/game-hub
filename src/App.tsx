import { Button, ButtonGroup, Grid, GridItem,Show } from '@chakra-ui/react'
import Navbar from './components/Navigation/Navbar'
import GameGrid from './components/GameGrid/GameGrid'
import GenreList from './components/GenreList/GenreList'


function App() {

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
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" >
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
