import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getChars, getAllChars } from './actions';

import './App.css';
import CharacterList from './components/CharacterList';





function App(props) {
  // console.log(props)
  const { searching, error, getChars, getAllChars } = props;


  // useEffect(()=> {
  //   getChars();
  // }, [])
  const handleAllChars = () => {
    dispatchEvent(getAllChars());
  }
  const handleGryffindor = () => {
    dispatchEvent(getChars("gryffindor"));
  }
  const handleSlytherin = () => {
    dispatchEvent(getChars("slytherin"));
  }
  const handleHufflepuff = () => {
    dispatchEvent(getChars("hufflepuff"));
  }
  const handleRavenclaw = () => {
    dispatchEvent(getChars("ravenclaw"));
  }

   
  return (
    <div className="App">
      <h1>Harry Potter Characters</h1>
      <div id='btn-div'>
        <button onClick={handleAllChars} className='btn' >All Characters</button>
        <button onClick={handleGryffindor} className='btn gryf-btn' >Gryffindor</button>
        <button onClick={handleSlytherin} className='btn slyth-btn'>Slytherin</button>
        <button onClick={handleHufflepuff} className='btn huff-btn'>Hufflepuff</button>
        <button onClick={handleRavenclaw} className='btn rave-btn'>RavenClaw</button>
        </div>

    {
      searching ? <h3>Searching Characters</h3> : <CharacterList />
    }
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    searching: state.searching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getChars, getAllChars })(App);