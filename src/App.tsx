import { Button, ButtonGroup, Grid, GridItem,Show } from '@chakra-ui/react'

function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`, /* for small devices */
      lg: `"nav nav" "aside main"`, /* for large devices */
    }}>
      <GridItem area="nav" bg={"coral"}>Nav</GridItem>
      <Show above='lg'>
        <GridItem area="aside" bg={"gold"}>Aside</GridItem>
      </Show>
      <GridItem area="main" bg={"Red"}>Main</GridItem>
    </Grid>
  )
}

export default App
