import React from "react";
import { connect } from 'react-redux';
import { getCharacters } from './../actions';

const Characters = ({ character, dispatch, error, isFetching }) => {
    // console.log('props:', props);
 

    if (error) {
        return <h2>We have an error: {error}</h2>
    }

    if (isFetching) {
        return <h2>Fetching Harry Potter Characters!</h2>
    }

    const handleClick = () => {
        dispatch(getCharacters());
    }

    console.log('0/5 data is rendered/rerendered')
  return (
    
    <div>
      <button onClick={handleClick}>All HP Characters</button>
      <div className="character">
        <h2>Character Name: {character.name}</h2>
        <img src={character.image}/>
        <p>House: {character.house}</p>
        <p>{character.name} is a wizard</p>
        <p>{character.name} was born on {character.dateOfBirth}</p>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
    console.log('Character State:', state)
    return ({
        character: state.character,
        isFetching: state.isFetching,
        error: state.error
    })
}

export default connect(mapStateToProps)(Characters);