import React from 'react'
import "./styles.css";

const cards = ({nameGroup, img, nameIdol}) => {
    return (
      <div className="w-full h-full my-4 mx-2 flex flex-col justify-between  text-center rounded-lg bg-white shadow-md cards pb-4" >
        <div className="w-full h-auto flex justify-center p-2 ">
            <img src={img}  className="w-full h-auto rounded-lg " alt={nameGroup}></img>
        </div>
      <div className="w-full hauto">
          <h2 className="text-xl font-bold"> {nameGroup}</h2>
      </div>

          <div>
            <p>{nameIdol}</p>
          </div>
      </div>
    )
}

export default cards
