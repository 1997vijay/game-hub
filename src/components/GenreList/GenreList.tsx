import { List, ListItem ,Image, Text, HStack, Spinner, Button, Heading} from "@chakra-ui/react"
import useGenre, { Genre } from "../../hooks/use-Genre"
import getCroppedImageUrl from "../../services/image-url"

interface Props{
    onSelectGenre:(genre:Genre)=>void,
    selectedGenre:Genre | null
}

const GenreList = ({selectedGenre,onSelectGenre}:Props) => {
    const {data,isLoading,error}=useGenre()

    if (error) return null
    if (isLoading) return <Spinner />
  return (
    <>
    <Heading fontSize={'2xl'} marginBottom={5} >Genres</Heading>
    <List>
        {data.map(g=>
        <ListItem key={g.id} paddingY={'6px'} >
            <HStack>
                <Image src={getCroppedImageUrl(g.image_background)} boxSize={'32px'} borderRadius={8} objectFit={'cover'}/>
                <Button whiteSpace={'normal'} textAlign={'left'} fontWeight={g.id===selectedGenre?.id ? 'bold':'normal'} onClick={()=>onSelectGenre(g)} fontSize='lg' variant={'link'}>{g.name}</Button>
            </HStack>
        </ListItem>)}
    </List>
    </>
  )
}

export default GenreList