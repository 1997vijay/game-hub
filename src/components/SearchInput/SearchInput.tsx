import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

interface Props{
    OnsubmitSearch:(searchText:string)=>void
}

const SearchInput = ({OnsubmitSearch}:Props) => {
    const ref=useRef<HTMLInputElement>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const searchText = event.target.value;
      OnsubmitSearch(searchText); // pass the string
    }

  return (
        <InputGroup>
            <InputLeftElement children={<BsSearch />} />
            <Input onChange={handleChange} ref={ref} borderRadius={20} placeholder="Searc Games..." variant={'filled'} />
        </InputGroup>
  )
}

export default SearchInput