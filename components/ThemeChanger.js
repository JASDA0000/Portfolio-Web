'use client'
import React from 'react'
import { useEffect,useState } from 'react'
const ThemeChanger = () => {
    
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (localStorage.theme === "dark")
    {
      document.documentElement.setAttribute('data-theme','dark');
      document.documentElement.setAttribute('style','color-scheme: dark;');
      setIsDark(true);
    } 
  },[]);

  const toggleDarkMode = () => {
    const IsDark = !isDark;
    setIsDark(IsDark);
    if(isDark) {
      document.documentElement.setAttribute('data-theme','dark');
      document.documentElement.setAttribute('style','color-scheme: dark;');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.setAttribute('data-theme','light');
      document.documentElement.setAttribute('style','color-scheme: light;');
      localStorage.theme = 'light';
    }
    
  }
  return (
    <div className='relative group cursor-pointer w-fit' onClick={toggleDarkMode}>
      {/* แสดง icon ของโหมดปัจจุบัน */}
  <span
    className={`material-symbols-outlined absolute transition-opacity duration-300 
      ${isDark ? 'opacity-100 group-hover:opacity-0' : 'opacity-100 group-hover:opacity-0'}
    `}
  >
    {isDark ? 'dark_mode' : 'light_mode'}
  </span>

  {/* แสดง icon ของอีกโหมดเมื่อ hover */}
  <span
    className={`material-symbols-outlined absolute transition-opacity duration-300 
      ${isDark ? 'opacity-0 group-hover:opacity-100' : 'opacity-0 group-hover:opacity-100'}
    `}
  >
    {isDark ? 'light_mode' : 'dark_mode'}
  </span>
    </div>
  )
}

export default ThemeChanger