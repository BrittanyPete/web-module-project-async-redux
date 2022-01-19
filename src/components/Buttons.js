import React from "react";
import { connect } from 'react-redux';
import Character from './Character';
import { getCharacters } from './../actions';

const Buttons = (props) => {
    console.log('props:', props);
    const { getCharacters, dispatch } = props;

    const handleClick = () => {
        dispatch(getCharacters());
    }

  return (
    <div>
    <div className="btn">
      <button onClick={handleClick}>All HP Characters</button>
      {/* <button>Female Characters</button>
      <button>Male Characters</button> */}
    </div>
    <div className='character'>
    <Character />
    </div>
    </div>
  );
};


const mapStateToProps = (state) => {
    console.log('btn state:', state)
    return ({
        characters: state.character,
        isFetching: state.isFetching,
        error: state.error
    })
}

export default connect(mapStateToProps, {getCharacters})(Buttons);