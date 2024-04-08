import { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from "./components/homepage/Home";
import Main from './components/homepage/main/Main';
import BitterStone from './components/pages/BitterStone';
import Edu from './components/pages/Edu';
import Health from './components/pages/Health';
import Helpful from './components/pages/Helpful';
import Lawyer from './components/pages/Lawyer';
import Media from './components/pages/Media';
import News from './components/pages/News';
import News_hero from './components/pages/News_hero';
import Services from './components/pages/Services';



function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode"))
  const lightMode = () => {
    setMode("#fff")
    localStorage.setItem("mode", "#fff")
  }

  const [navigate, setNavigate] = useState(false)
  const darkMode = () => {
    setMode("#000")
    localStorage.setItem("mode", "#000")
  }

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Home mode={mode} lightMode={lightMode} darkMode={darkMode} navigate={navigate} setNavigate={setNavigate}/>}>
        <Route path="/" index element={<Main mode={mode}/>}/>
        <Route path="news" element={<News mode={mode} setNavigate={setNavigate}/>}/>
        <Route path="edu" element={<Edu mode={mode} />}/>
        <Route path="health" element={<Health mode={mode} />}/>
        <Route path="lawyerClinic" element={<Lawyer mode={mode}/>}/>
        <Route path="bitterStone" element={<BitterStone mode={mode}/>}/>
        <Route path="useful" element={<Helpful mode={mode}/>}/>
        <Route path="media" element={<Media mode={mode}/>}/>
        <Route path="services" element={<Services mode={mode}/>}/>
        <Route path=":id" element={<News_hero mode={mode}/>}/>
      </Route>
    )
  )


  return (
    <>
    <RouterProvider router={routes}/>
     
    </>
  );
}

export default App;
