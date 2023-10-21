import { Button, ButtonGroup, Grid, GridItem,Show } from '@chakra-ui/react'
import Navbar from './components/Navigation/Navbar'


function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`, /* for small devices */
      lg: `"nav nav" "aside main"`, /* for large devices */
    }}>
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main" >Main</GridItem>
    </Grid>
  )
}

export default App
