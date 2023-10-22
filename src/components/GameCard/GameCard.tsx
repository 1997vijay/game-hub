
import { Game } from '../../hooks/useGames'
import { Card ,CardBody,HStack,Heading,Image,Text} from '@chakra-ui/react'
import PlatformList from './PlatformList'
import MetaCritic from '../MetaCritic/MetaCritic'
import getCroppedImageUrl from '../../services/image-url'

interface Props {
    game:Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'} width={'300px'}>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
            <HStack justifyContent={'space-between'}>
              <PlatformList platforms={game.parent_platforms.map(p=>p.platform)} />
              <MetaCritic score={game.metacritic} />
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard