import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props{
    onSelectSortOrder:(sortOrder:string)=>void,
    sortOrderValue:string
}

const SortSelector = ({onSelectSortOrder,sortOrderValue}:Props) => {
    const sortOrder=[
        {value:'',label:'Relevance'},
        {value:'-added',label:'Date Added'},
        {value:'name',label:'Name'},
        {value:'-released',label:'Release Date'},
        {value:'-metacritic',label:'Popularity'},
        {value:'-rating',label:'Average Rating'},
    ]
    const currentSortOrder=sortOrder.find(order=>order.value===sortOrderValue)
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order By: {currentSortOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrder.map(item=>
                    <MenuItem onClick={()=>onSelectSortOrder(item.value)} key={item.value} value={item.value}>{item.label}</MenuItem>
                    )}
            </MenuList>
        </Menu>
      )
}

export default SortSelector