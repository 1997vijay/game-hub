import { List, ListItem ,Image, Text, HStack, Spinner} from "@chakra-ui/react"
import useGenre from "../../hooks/use-Genre"
import getCroppedImageUrl from "../../services/image-url"

const GenreList = () => {
    const {data,isLoading,error}=useGenre()

    if (error) return null
    if (isLoading) return <Spinner />
  return (
    <List>
        {data.map(g=>
        <ListItem key={g.id} paddingY={'5px'}>
            <HStack>
                <Image src={getCroppedImageUrl(g.image_background)} boxSize={'32px'} borderRadius={8}/>
                <Text fontSize={'lg'}>{g.name}</Text>
            </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenreList