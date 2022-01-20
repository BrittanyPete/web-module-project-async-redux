import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';


function App(props) {
  console.log(props)
  const { searching, error } = props;


  if (error !== '') {
    return <h3>{error}</h3>
  }

   
  return (
    <div className="App">
      <h1>Search Harry Potter Characters</h1>
      <SearchForm />

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

export default connect(mapStateToProps)(App);