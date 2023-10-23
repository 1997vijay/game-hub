import { Grid, GridItem,HStack,Heading,Show } from '@chakra-ui/react'
import Navbar from './components/Navigation/Navbar'
import GameGrid from './components/GameGrid/GameGrid'
import GenreList from './components/GenreList/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/use-Genre'
import PlatformSelector from './components/PlateformSelector/PlatformSelector'
import { Platform } from './hooks/useGames'
import SortSelector from './components/PlateformSelector/SortSelector'
import GameHeading from './components/GameHeading/GameHeading'
import NextPage from './components/LoadingNewPage/NextPage'


function App() {
  const [selectedGenre,setSelectedGenre]=useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform]=useState<Platform | null>(null)
  const [selectSortOrder,setSelectSortOrder] = useState('')
  const [searchText, setSearchText]=useState('')
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount,setPageCount]=useState(0)

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
    console.log(pageNumber)
  };

  const handlePreviousPage = () => {
    if(pageNumber === 0) 
      setPageNumber(1);
    else 
      setPageNumber(pageNumber - 1);
    console.log(pageNumber)
  };

  const name=`${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`
  
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
        <Navbar OnsubmitSearch={(searchText)=>setSearchText(searchText)}/>
      </GridItem>
      <Show above='lg'>
        <GridItem area="aside" paddingX={4}>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=>setSelectedGenre(genre)}/>
        </GridItem>
      </Show>
      <GridItem area="main" justifyContent={'space-between'}>
        <GameHeading headingText={name} searchText={searchText}/>
        <HStack spacing={5} paddingLeft={10}>
          <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform)=>setSelectedPlatform(platform)} />
          <SortSelector sortOrderValue={selectSortOrder} onSelectSortOrder={(sortOrder)=>setSelectSortOrder(sortOrder)}/>
        </HStack>
        <GameGrid onLoadCount={(pageCount)=>setPageCount(pageCount)} selectPageNumber={pageNumber} searchText={searchText} selectdSortOrder={selectSortOrder} selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
        <NextPage currentPageNumber={pageNumber} showPageCount={pageCount} onNext={handleNextPage} onPrevious={handlePreviousPage} isDisabled={pageNumber===1 ? true : false}/>
      </GridItem>
    </Grid>
  )
}

export default App
