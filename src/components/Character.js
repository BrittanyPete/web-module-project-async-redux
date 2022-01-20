import React from "react";

const Character = (props) => {
  const { char } = props;
    
 

  return (
    <div className='character'>
      <h2>{char.name}</h2>
      <img width='200' src={char.image}/>
      <p>{char.house}</p>
      <p>{char.patronus}</p>
      <p>{char.ancestry}</p>
      <p>Species: {char.species}</p>
    </div>
  )
}

export default Character;