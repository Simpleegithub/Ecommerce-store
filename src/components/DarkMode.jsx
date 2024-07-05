import LightPng from '../assets/website/light-mode-button.png'

import DarkButton from '../assets/website/dark-mode-button.png'
import { useEffect, useState } from 'react'

function DarkMode() {
    const [theme,setTheme]=useState(localStorage.getItem("theme")? localStorage.getItem("theme"):"light");
    const element=document.documentElement;
    console.log(element)

    useEffect(()=>{
        if(theme=='dark'){
            element.classList.add("dark");
            localStorage.setItem("theme","dark");
        } else{
            element.classList.remove("dark");
            localStorage.setItem("theme","light")
        }
    },[theme])

    return (
        <div className='relative'>
            <img src={LightPng} alt="" className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme=='dark'?'opacity-0':"opactiy-100"}`} onClick={()=>setTheme(theme=='light'?"dark":"light")} />
            <img src={DarkButton} alt="" className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300' onClick={()=>setTheme(theme=='light'?"dark":"light")} />
        </div>
    )
}

export default DarkMode
