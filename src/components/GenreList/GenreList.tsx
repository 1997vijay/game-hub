import { List, ListItem ,Image, Text, HStack} from "@chakra-ui/react"
import useGenre from "../../hooks/use-Genre"
import getCroppedImageUrl from "../../services/image-url"

const GenreList = () => {
    const {data}=useGenre()
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