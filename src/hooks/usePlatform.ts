import platform from "../data/platform"
import useData from "./useData"

interface Platform {
    id:number,
    name:string,
    slug:string
}

// const usePlatform=()=>useData<Platform>('/platforms/lists/parents')
const usePlatform=()=>({data:platform,isLoading:false,error:null})

export default usePlatform