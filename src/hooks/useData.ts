import { AxiosRequestConfig, CanceledError } from "axios"
import { useState, useEffect } from "react"
import apiClient from "../services/api-client"


interface FetchResponse<T> {
    count:number,
    results:T[],
    next:string,
    previous:string
}

const useData=<T>(endpoint:string,requestConfig?:AxiosRequestConfig, deps?:any[])=>{
    const [data,setData]=useState<T[]>([])
    const [pageCount,setPageCount]=useState(0)
    const [error,setError]=useState('')
    const [isLoading,setLoading]=useState(false)

    /* fetch games list */
    useEffect(()=>{
        const controller=new AbortController()
        
        setLoading(true)
        apiClient.get<FetchResponse<T>>(endpoint,{signal:controller.signal, ...requestConfig})
        .then(response=>{setData(response.data.results);
                         setPageCount(response.data.count)
                         setLoading(false)})
        .catch(error=>{
            if(error instanceof CanceledError) return;
            setError(error.message); setLoading(false)})
        return ()=> controller.abort()
    },deps ?[...deps]:[])
    return {data,pageCount,error, isLoading}
}

export default useData