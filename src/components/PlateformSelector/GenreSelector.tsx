import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { Platform } from '../../hooks/useGames'
import useGenre, { Genre } from '../../hooks/use-Genre'

interface Props {
    onSelectedGenre:(genre: Genre)=>void,
    selectedGenre: Genre | null
}

const GenreSelector = ({onSelectedGenre,selectedGenre}:Props) => {
    const {data,error}=useGenre()
    if (error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {selectedGenre?.name || 'All Genre'}
        </MenuButton>
        <MenuList>
            {data.map(genre=>
                <MenuItem onClick={()=>onSelectedGenre(genre)} key={genre.id}>
                    {genre.name}
                    </MenuItem>
                )}
        </MenuList>
    </Menu>
  )
}

export default GenreSelector