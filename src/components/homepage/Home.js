import React, { useState } from 'react'
import './Home.css'
import logo from '../images/logo.png'
import search from '../images/search.png'
import sun from '../images/sun.png'
import moon from '../images/moon.png'
import instagram from '../images/instagram.webp'
import facebook from '../images/facebook.webp'
import telegram from '../images/telegram.png'
import youtube from '../images/youtube.png'
import more from '../images/more.png'
import { NavLink, redirect, Outlet, Navigate} from 'react-router-dom'
import Menu from './Menu'
import { useEffect } from 'react'


const Home = ({mode, lightMode, darkMode, navigate, setNavigate}) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue("")
        setNavigate(true)
    }


    const handleChange = (e) =>{
        setValue(e.target.value)
    }


    return (
        <div className='homepage' style={{backgroundColor: mode ? mode : "#fff", color: mode==="#fff" ? "#000" : "#fff"}}>
            <header>
                <div className='container'>
                    <div className='header'>
                        <img src={logo} alt="logo" width="180" />
                        <button className='menu' onClick={() => setOpen(true)}>
                            <img src={more} width="35" />
                        </button>
                        <div className='hidden'>
                            <div className='search'
                            style={{backgroundColor: mode ? mode : "#fff", color: mode==="#fff" ? "#000" : "#fff"}}>
                                {navigate && <Navigate to="news"/>}
                                <form onSubmit={handleSubmit}>
                                    <input type="text" className='searchInput lotin'
                                    onChange={handleChange} value ={value}
                                        placeholder='Qidiruv' />
                                    <button type="button">
                                        <img src={search} alt="search" width="18" />
                                    </button>
                                </form>
                            </div>
                            <div className='mode'
                            style={{backgroundColor: mode && mode==="#000" ? "#444" : "#efefef"}}>
                                <button onClick={lightMode}>
                                    <img src={sun} alt="sun" width="15" height="15" className='sun'
                                    style={{ backgroundColor: mode && mode==="#000" ? "" : "#00dfff"}} />
                                </button>
                                <button onClick={darkMode} >
                                    <img src={moon} alt="moon" width="15" height="15"
                                    style={{ backgroundColor: mode && mode==="#000" ? "#00dfff" : ""}} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hr'></div>
                <div className='container'>
                    <div className='nav_div'>
                        <nav>
                            <NavLink to="/">Asosiy</NavLink>
                            <NavLink to="news">Yangiliklar</NavLink>
                            <NavLink to="edu">Ta'lim</NavLink>
                            <NavLink to="health">Salomatlik</NavLink>
                            <NavLink to="lawyerClinic">Huquqiy klinika</NavLink>
                            <NavLink to="bitterStone">Achchitosh</NavLink>
                            <NavLink to="useful">Foydali</NavLink>
                            <NavLink to="media">Media</NavLink>
                            <NavLink to="services">Xizmatlar</NavLink>
                        </nav>
                        <select>
                            <option>O'z</option>
                            <option>Ўз</option>
                        </select>
                    </div>
                </div>


            </header>
            <main>
                <Outlet/>
            </main>
            <footer style= {{
                backgroundColor: mode && mode==="#000" ? "#222" : "#efefef", color: mode && mode==="#000" ? "#fff" : "#000"}}>
                <div className='container'>
                    <div className='footer_logo'>
                        <img src={logo} alt="logo" width="180" />
                        <div className='media'>
                            <a href=""><img src={instagram} width="20" /></a>
                            <a href=""><img src={telegram} width="20" /></a>
                            <a href=""><img src={youtube} width="20" /></a>
                            <a href=""><img src={facebook} width="20" /></a>
                        </div>
                    </div>
                    <div className='contact'>
                        <div className='desc'>
                            <p>Bolalarolami.uz internet nashri 2023 yilning 7 aprelda elektron OAV sifatida O‘zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar agentligi tomonidan davlat ro‘yxatidan o‘tkazilgan.</p>
                            <p>Guvohnoma raqami: №073429</p>
                            <p>Muassis: "Dunyo – bolalar uchun" masʼuliyati cheklangan jamiyati.</p>
                            <p>Masʼul muharrir: Sherali Soliyev.</p>
                            <p>Elektron manzil: bolalarolamiuz@gmail.com</p>
                        </div>
                        <div className='phone'>
                            <h3>Aloqa</h3>
                            <p>Manzil: Toshkent shahri</p>
                            <p>Tel: +998900044121</p>
                        </div>
                    </div>
                    <p>Materiallarimizdan to‘liq yoki qisman foydalanilganda "Foydalanish shartlari"ga amal qilinishi shart. Barcha huquqlar O‘zbekiston Respublikasining ommaviy axborot vositalari to‘g‘risidagi hamda mualliflik va turdosh huquqlar to‘g‘risidagi qonun hujjatlarida belgilangan tartibda himoyalangan.</p>
                    <p>© 2022-2023 Bolalar Olami. Barcha huquqlar himoyalangan.</p>
                </div>
            </footer>
            {open && <Menu setOpen={setOpen} mode={mode} lightMode={lightMode} darkMode={darkMode}/>}
        </div>
    )
}

export default Home