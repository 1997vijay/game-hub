import { useEffect, useState } from "react"
import { CanceledError } from "axios"
import apiClient from "../services/api-client"

export interface Details {
    id:number,
    name:string,
    description_raw:string
}

const useDetails=(id:number)=> {
    const [data,setData]=useState<Details>()
    const [error,setError]=useState('')
    const [isLoading,setLoading]=useState(false)

    /* fetch games list */
    useEffect(()=>{
        const controller=new AbortController()
        
        setLoading(true)
        apiClient.get<Details>('/games/'+id,{signal:controller.signal})
        .then(response=>{setData(response.data); setLoading(false)})
        .catch(error=>{
            if(error instanceof CanceledError) return;
            setError(error.message); setLoading(false)})
        return ()=> controller.abort()
    },[])
    return {data,error, isLoading}
}
export default useDetails