import { List, ListItem ,Image, Text, HStack, Spinner, Button} from "@chakra-ui/react"
import useGenre, { Genre } from "../../hooks/use-Genre"
import getCroppedImageUrl from "../../services/image-url"

interface Props{
    onSelectGenre:(genre:Genre)=>void
}

const GenreList = ({onSelectGenre}:Props) => {
    const {data,isLoading,error}=useGenre()

    if (error) return null
    if (isLoading) return <Spinner />
  return (
    <List>
        {data.map(g=>
        <ListItem key={g.id} paddingY={'6px'}>
            <HStack>
                <Image src={getCroppedImageUrl(g.image_background)} boxSize={'32px'} borderRadius={8}/>
                <Button onClick={()=>onSelectGenre(g)} fontSize='lg' variant={'link'}>{g.name}</Button>
            </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenreList