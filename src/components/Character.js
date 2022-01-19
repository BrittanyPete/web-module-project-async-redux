import React from 'react';
import { connect } from 'react-redux';


const Character = (props) => {
    const { character } = props;

    console.log('0/5 Renders new state.');

    return (
        <>

        <div className='characterDiv'>
            <h2>Character Name: {character.name}</h2>
            <img src={character.image}/>
            <p>House: {character.house}</p>
            <p>Harry is a wizard</p>
            <p>Harry was born on {character.dateOfBirth}</p>
        </div>

        </>
    )
}

const mapStateToProps = state => {
    console.log('State:', state.character);
    return{
        character: state.character
    }
};

export default connect(mapStateToProps)(Character);