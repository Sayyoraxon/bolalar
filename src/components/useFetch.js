import { useEffect } from 'react'
import { useState } from 'react'

    function useFetch(url) {
        const [data, setData] = useState(null)
        const [loader, setLoader] = useState(false)
        const [error, setError] = useState(null)
    
        useEffect(()=>{
            const getData = async()=>{
                setLoader(true)
                try{
                    const res = await fetch(url)
                    if(!res.ok){
                        throw new Error(res.statusText)
                    }
                    const data = await res.json()
                    setLoader(false)
                    setData(data)
                }
                catch(err){
                    console.log(err.message)
                    setError(err.message)
                    setLoader(false)
                }
            }
    
            getData()
        },[url])
    
      return {data, loader, error}
    }
    
    export { useFetch }