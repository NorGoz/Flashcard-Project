import { useState,useEffect } from "react"

  export const useFetchData = (url,props) => {
        const [data, setData] = useState([]);
        
        useEffect(()=>{
            if(!url) {
                console.error(`Url jest wymagany : ${url}`);
                return;
            }
             const fetchMyAPI = async () => {
                let response = await fetch(url)
                response = await response.json();
                setData(response)
            }
            fetchMyAPI()
        },[props])
        return {data}
 }




