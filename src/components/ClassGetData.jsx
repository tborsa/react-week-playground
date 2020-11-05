import React, {useState, useEffect} from 'react';
import axios from 'axios';

class ClassGetData extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    }
    // const [pokemon, setPokemon] = useState({});
  }

  componentDidMount() {
    console.log("get data is mounted")
    this.getPokemon();
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log("get data is updated")
    if (prevProps.num !== this.props.num) {
      this.getPokemon()
    }
  }

  getPokemon() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.num}`)
      .then(({data}) => {
        this.setState({
          pokemon: data
        });
      });
  }
  // useEffect(() => {
  //   axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
  //   .then(({data}) => {
  //     setPokemon(data);
  //   });
  // }, [num]);
  
  render() {
    console.log("Pokemon component rendering")
    return (
      <div>
        <h1>Pokemon {this.props.num}</h1>
        {this.state.pokemon.name}
      </div>
    );
  }
};

export default ClassGetData;