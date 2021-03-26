import React,{useEffect,useState} from 'react'
import { Divider, Skeleton } from "antd";
import { getDestacadosPosts } from "../../../api/post";
export default function Destacados() {
    const [destacados, setDestacados] = useState() 

    useEffect(() => {
        getDestacadosPosts().then(response => {
            setDestacados(response.posts);
          });
    }, [])

   
    return (
        <div>
            destacados
            <Skeleton/>
        </div>
    )
}
