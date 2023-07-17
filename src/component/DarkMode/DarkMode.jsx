import React, { useEffect, useState } from "react"
import logoMoon from '../../assets/images/icon-moon.svg'
import logoSun from '../../assets/images/icon-sun.svg'

export default function DarkMode({theme,setTheme}) {
    const setDarkMode = () => {
        setTheme('dark')
        document.querySelector("body").setAttribute("deta-tehem", "dark")
        localStorage.setItem("selectedTheme", "dark")
    }
    const setLighMode = () => {
        setTheme('light')
        document.querySelector("body").setAttribute("deta-tehem", "ligh")
        localStorage.setItem("selectedTheme", "ligh")
    }
    useEffect(() => {
        if (theme == 'dark') {
            setDarkMode()
        } else {
            setLighMode()
        }
    }, [])
    const toggelTehem = e => {

        if (theme === 'light') setDarkMode()
        else setLighMode()
    }
    return (
        <>
            <button className='mt-[30px]' onClick={toggelTehem}>
                <img src={`${theme == 'dark' ? logoSun : logoMoon}`} alt="" />
            </button>
        </>
    )
}