import React from 'react';
import axios from 'axios';

// function calls 1 -> 1 render
// class based 1 class initialization -> all renders

class ClassPokedex extends React.Component {
    constructor(props) {
        super();
        // let [pokemon, setPokemon] = useState();
        this.state = { //is state
            search: null,
            name: props.startPokemon,
            description: 'pokemon description',
            image: 'img'
        }
        this.search = this.search.bind(this);
    }

    search (e) { // arrow function bind this differently
        console.log('search is happening');
        this.setState({...this.state, search: e.target.value});
    }
    
    // lifecycle methods
    componentDidMount () { // happens once when the component is first created/mounted
        // useEffect(() => {}, []);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.startPokemon}`)
            .then((res) => {
                this.setState({
                    ...this.state, 
                    name: res.data.name, 
                    image: res.data.sprites.front_default
                })
            })
        this.interval = setInterval(() => {
            console.log('tick');
        }, 1000);
    }

    componentDidUpdate (prevProps, prevState, snapshot) { // happends once after every render
        // useEffect(() => {
        //     // search and update
        // }, [this.state.search]);
        if (prevState.search !== this.state.search) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.search}`)
            .then((res) => {
                this.setState({
                    ...this.state, 
                    name: res.data.name, 
                    image: res.data.sprites && res.data.sprites.front_default
                })
            })
        }
    }

    componentWillUnmount () { //happens once before a component is removed
        console.log('cleanup coimponentWillUnmount');
        clearInterval(this.interval);
    }

    render () {
        return (
            <div className="pokedex">
                <h1>Pokedex</h1>
                <p>{this.state.search}</p>
                <input onChange={this.search} value={this.state.search}></input>
                <br></br>
                <br></br>
                <div className="screen">
                    <img src={this.state.image}></img>
                </div>
                <h2>{this.state.name}</h2>
                <p>{this.state.description}</p>
            </div>
        )
    }
}

export default ClassPokedex;