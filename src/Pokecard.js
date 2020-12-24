import React, { Component } from "react";
import './Pokecard.css';

const IMG_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
    render() {
        const image = `${IMG_API}${padToThree(this.props.id)}.png`;
        const { name, type, exp } = this.props;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{name}</h1>
                <div className="Pokecard-image">
                    <img src={image} alt={name} />
                </div>
                <div className="Pokecard-data">Type: {type}</div>
                <div className="Pokecard-data">EXP: {exp}</div>
            </div> )
    }
}

export default Pokecard;