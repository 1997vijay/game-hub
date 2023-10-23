
import { Game } from '../../hooks/useGames'
import { Card ,CardBody,HStack,Heading,Image,Text} from '@chakra-ui/react'
import PlatformList from './PlatformList'
import MetaCritic from '../MetaCritic/MetaCritic'
import getCroppedImageUrl from '../../services/image-url'
import useDetails, { Details } from '../../hooks/use-details'

interface Props {
    game:Game
}

const GameCard = ({game}: Props) => {
  // const {data}=useDetails(game.id)

  return (
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
            <HStack justifyContent={'space-between'} marginBottom={3}>
              <PlatformList platforms={game.parent_platforms.map(p=>p.platform)} />
              <MetaCritic score={game.metacritic} />
            </HStack>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
            {/* <Text paddingY={5}>{data?.description_raw}</Text> */}
        </CardBody>
    </Card>
  )
}

export default GameCard