import React from 'react'
import './News.css'
import { useFetch } from '../useFetch'
import { NavLink } from 'react-router-dom'

function Lawyer({mode}) {

    const { data } = useFetch("https://old.bolalarolami.uz/uz/api/get-entity?slug=law&page=1")
    console.log(data ? data : "")
    const filteredData = data && data.itemList.filter((item, i) => {
        return i > 1
    })
    return (
        <>
            {data && <div className='container'>
                <div className='news'>
                    <div className='news_hero'>
                        <NavLink to={`../${data.itemList[0].id}`}>
                            <div>
                                <img src={data.itemList[0].file_1_0} />
                                <div>{data.itemList[0].text_1_0}</div>
                            </div>
                        </NavLink>
                        <NavLink to={`../${data.itemList[0].id}`} className="hidden">
                            <div>
                                <img src={data.itemList[1].file_1_0} />
                                <div>{data.itemList[1].text_1_0}</div>
                            </div>
                        </NavLink>
                    </div>
                    <div className='news_main'>
                        <NavLink to={`../${data.itemList[1].id}`} className="visible"
                        style={{color: mode==="#000" ? "#fff" : ""}}>
                            <div>
                                <img src={data.itemList[1].file_1_0} />
                                <div>
                                    <p><b>{data.itemList[1].text_1_0}</b></p>
                                </div>
                            </div>
                        </NavLink>
                        {filteredData.map((i) => (
                            <NavLink to={`../${i.id}`}
                            style={{color: mode==="#000" ? "#fff" : ""}}>
                                <div>
                                    <img src={i.file_1_0} />
                                    <div>
                                        <p><b>{i.text_1_0}</b></p>
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                    <div>

                    </div>
                </div>
            </div>}
        </>
    )
}

export default Lawyer