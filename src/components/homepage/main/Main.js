import './Main.css'
import { useFetch } from '../../useFetch'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import arrow from '../../images/arrow.png'
import { NavLink } from 'react-router-dom';


const Main = ({mode}) => {
    const { data } = useFetch("https://old.bolalarolami.uz/uz/api/home-page?page=1")
    console.log(data ? data : "")

    const filteredData = data && data.homeItems.filter((item, i) => {
        return i > 1
    })

    console.log(filteredData)

    return (
        <div className='container'>
            {data &&
                <div className='main'>
                    <div className='main_news'>
                        <div className='main_news_carousel'>
                            <div className='flex_car'>
                                <div className='flex-car'>
                                    <AliceCarousel autoPlay autoPlayInterval="2000">
                                        {data.homeItems.map((i) => (
                                            <NavLink to={`../${i.id}`}>
                                                <div className="sliderimg">
                                                    <img src={i.file_1_0} />
                                                    <h1 className='title'>{i.text_1_0}</h1>
                                                </div>
                                            </NavLink>

                                        ))}
                                    </AliceCarousel>
                                </div>
                                <div className='subcarousel'>
                                    <NavLink to={`../${data.homeItems[0].id}`}>
                                        <div>
                                            <img src={data.homeItems[0].file_1_0} />
                                            <h4>{data.homeItems[0].text_1_0}</h4>
                                        </div>
                                    </NavLink>
                                    <NavLink to={`../${data.homeItems[1].id}`}>
                                        <div>
                                            <img src={data.homeItems[1].file_1_0} />
                                            <h4>{data.homeItems[1].text_1_0}</h4>
                                        </div>
                                    </NavLink>

                                </div>
                            </div>

                            <div className='main_all-news'>
                                {filteredData.map((i) => (
                                    <NavLink to={`../${i.id}`}>
                                        <div>
                                            <img src={i.file_1_0} />
                                            <h4>{i.text_1_0}</h4>
                                        </div>
                                    </NavLink>

                                ))}
                            </div>

                        </div>
                        <div className='latest' 
                        style= {{backgroundColor: mode && mode==="#000" ? "#222" : "#efefef", color: mode && mode==="#000" ? "#fff" : "#000"}}>
                            <h3>SO'NGGI YANGILIKLAR</h3>
                            <div className='l_scroll'>
                                {data.latestNews.map((i) => (
                                    <NavLink to={`../${i.id}`}
                                        style={{color: mode && mode==="#000" ? "#fff" : "#000"}}>
                                        <div>
                                            <h4 style={{fontWeight: "500"}}>{i.text_1_0}</h4>
                                            <div className='line'></div>
                                        </div>
                                    </NavLink>

                                ))}
                            </div>
                            <div className='more'><h3>Ko'proq</h3><NavLink><img src={arrow} alt="arr" width="20" height="20" /></NavLink></div>
                        </div>
                    </div>
                    <h2>Eng ko'p o'qilgan habarlar</h2>
                    <div className='most'>
                        {data.mostRead.map((i) => (
                            <NavLink to={`../${i.id}`}
                            style={{color: mode==="#000" ? "#fff" : ""}}>
                                <div>
                                    <img src={i.file_1_0} />
                                    <div>
                                        <h4>{i.text_1_0}</h4>
                                        <p>{i.text_2_0}</p>
                                    </div>
                                </div>
                            </NavLink>

                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default Main