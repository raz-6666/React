import React from 'react'

const Hotel = ({imgsrc,title,text,btnText}) => {
  return (
    <>
    <div className="hotelCards">
        <img src={imgsrc}alt=""/>
        <h2 className="title">{title}</h2>
        <p>{text}</p>
        <div className="btn">
          <button>{btnText}</button>
        </div>

      </div>

    
    
    </>
  )
}

export default Hotel;