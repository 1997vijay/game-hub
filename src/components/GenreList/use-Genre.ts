import { CanceledError } from "axios"
import { useState, useEffect } from "react"
import apiClient from "../../services/api-client"


interface Genre {
    id:number,
    name:string
}

interface FetchGenreResponse {
    count:number,
    results:Genre[]
}

const useGenre=()=>{
    const [genre,setGenre]=useState<Genre[]>([])
    const [error,setError]=useState('')
    const [isLoading,setLoading]=useState(false)

    /* fetch games list */
    useEffect(()=>{
        const controller=new AbortController()
        
        setLoading(true)
        apiClient.get<FetchGenreResponse>('/genres',{signal:controller.signal})
        .then(response=>{setGenre(response.data.results); setLoading(false)})
        .catch(error=>{
            if(error instanceof CanceledError) return;
            setError(error.message); setLoading(false)})
        return ()=> controller.abort()
    },[])
    return {genre,error, isLoading}
}

export default useGenre