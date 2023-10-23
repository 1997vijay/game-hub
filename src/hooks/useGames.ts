import { Genre } from "./use-Genre"
import useData from "./useData"

export interface Platform {
    id:number,
    name:string,
    slug:string
}

export interface Game {
    id:number,
    name:string,
    background_image:string,
    parent_platforms:{platform: Platform}[],
    metacritic:number,
    rating_top:number
}

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null,selectdSortOrder:string,searchText:string) => useData<Game>('/games',{params:{
                                                                                                            genres:selectedGenre?.id,
                                                                                                            platforms:selectedPlatform?.id,
                                                                                                            ordering: selectdSortOrder,
                                                                                                            search: searchText
                                                                                                        }},
                                                                                                    [ selectedGenre?.id,selectedPlatform?.id,selectdSortOrder,searchText ]
                                                                                                    )

export default useGames