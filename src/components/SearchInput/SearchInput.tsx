import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

interface Props{
    OnsubmitSearch:(searchText:string)=>void
}

const SearchInput = ({OnsubmitSearch}:Props) => {
    const ref=useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(event)=>{event.preventDefault()
                    if (ref.current) OnsubmitSearch(ref.current?.value);}
                    }>
        <InputGroup>
            <InputLeftElement children={<BsSearch />} />
            <Input ref={ref} borderRadius={20} placeholder="Searc Games..." variant={'filled'} />
        </InputGroup>
    </form>
  )
}

export default SearchInput