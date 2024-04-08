import React from 'react'
import './Menu.css'
import close from '../images/close.png'
import sun from '../images/sun.png'
import moon from '../images/moon.png'
import search from '../images/search.png'

function Menu({ setOpen, mode, lightMode, darkMode }) {
    return (
        <div className='menu_div' style={{backgroundColor: mode && mode==="#000" ? "#222" : "#fff"}}>
            <div className='menu_header'>
                <div className='select'>
                    <select>
                        <option>O'z</option>
                        <option>Ўз</option>
                    </select>
                    <div className='mode'
                    style={{backgroundColor: mode && mode==="#000" ? "#444" : "#efefef"}}>
                        <button onClick={lightMode}>
                            <img src={sun} alt="sun" width="15" height="15" className='sun'
                                style={{ backgroundColor: mode === "#fff" ? "#00dfff" : "" }} />
                        </button>
                        <button onClick={darkMode} >
                            <img src={moon} alt="moon" width="15" height="15"
                                style={{ backgroundColor: mode === "#fff" ? "" : "#00dfff" }} />
                        </button>
                    </div>
                </div>
                <img src={close} width="30" onClick={() => setOpen(false)}
                    style={{ cursor: "pointer" }} />
            </div>
            <div className='search'
            style={{backgroundColor: mode && mode==="#000" ? "#222" : "#fff", color: mode==="#fff" ? "#000" : "#fff"}}>
                <form>
                    <input type="text" className='searchInput lotin'
                        placeholder='Qidiruv' />
                    <input type="text" className='searchInput krill'
                        placeholder='Қидирув' />
                    <button type="button">
                        <img src={search} alt="search" width="18" />
                    </button>
                </form>
            </div>
            <div>
                <nav className='nav_menu'>
                    <a href="#" className='active'>Asosiy</a>
                    <a href="#">Yangiliklar</a>
                    <a href="#">Ta'lim</a>
                    <a href="#">Salomatlik</a>
                    <a href="#">Huquqiy klinika</a>
                    <a href="#">Achchitosh</a>
                    <a href="#">Foydali</a>
                    <a href="#">Media</a>
                    <a href="#">Xizmatlar</a>
                </nav>
            </div>
        </div>
    )
}

export default Menu