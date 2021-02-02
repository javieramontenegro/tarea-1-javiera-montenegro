import React from 'react'
import Logo  from "../../assets/me.png";
const header = () => {
    return (
        <div className="w-full h-auto py-4 px-8 flex justify-between bg-mypink items-center">
           <img src={Logo} className="w-full h-auto logo" alt="logo" ></img>
            <h2 className="text-white text-basa md:text-2xl ml-2 md:ml-0">Kpop Derp memes</h2>
        </div>
    )
}

export default header
