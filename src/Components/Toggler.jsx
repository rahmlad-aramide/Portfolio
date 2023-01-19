import React, {useState} from 'react'

const Toggler = ({handleTheme}) => {
    const [dark, setDark] = useState(false)
    const handleButton = () => {
        setDark(!dark)
        handleTheme()
    }
    return (
        <div className={`text-xl flex h-6 w-[3.5rem] justify-center items-center relative text-white rounded-2xl bg-black border border-white`}>
            <div className={`absolute transition duration-500 ${dark? 'text-xs translate-x-[30%]':'text-xs -translate-x-[35%]'}`}>{dark? 'Dark':'Light'}</div>
            <div className={`transition duration-500 flex w-6 h-6 scale-[70%] absolute ${dark? '-translate-x-[65%]': 'translate-x-[65%]'} bg-white z-10 rounded-2xl`} onClick={handleButton}></div>
        </div>
  )
}

export default Toggler;