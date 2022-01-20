import React from "react";

const Character = (props) => {
  const { char } = props;
    
 

  return (
    <div className='character'>
      <h2>{char.name}</h2>
      <img width='200' src={char.image}/>
      <p>House: {char.house}</p>
      <p>Patronus: {char.patronus}</p>
    </div>
  )
}

export default Character;