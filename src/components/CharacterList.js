import React from 'react';
import Character from './Character';
import { connect } from 'react-redux';

const CharacterList = (props) => {
    const { character } = props

    return (
        <div id='characterList'>
            {
                character.map(char => {
                    return(
                    <Character char={char}/>
                    )
                })
            }
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
      character: state.character
    }
  }

export default connect(mapStateToProps)(CharacterList);