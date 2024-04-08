import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../useFetch'
import NewsText from './NewsText'

function News_hero({mode}) {
    const { id } = useParams()
    const { data } = useFetch(`https://old.bolalarolami.uz/uz/api/get-item?id=${id}`)
    console.log(mode)

    return (
        <div className='newsHero'
        style={{padding: "10px", textAlign: "justify", color: mode === "#fff" ?" #000" : "#fff"}}>
            {data &&
            <>
                <h1 style ={{textAlign: "center"}}>{data.item.text_1_0}</h1>
                <img src={data.item.file_1_0}
                style = {{width: "100%", margin: "20px 0"}}/>
                <div dangerouslySetInnerHTML={{__html: data.item.text_3_0}} style={{color: mode === "#000" ? "#fff" : "#000"}}></div>
            </>    
            }
        </div>
    )
}

export default News_hero