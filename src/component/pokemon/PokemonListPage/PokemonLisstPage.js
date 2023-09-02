import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group"; 
import "../PokemonListPage/stylolistapokemon.css";
import "../../pokemon/reset.css";

const PokemonListPage = ({ ResultFilter }) => {
  return (
    <section>
      <TransitionGroup className="PokemonCards">
        {ResultFilter.map(([pokemonName, typeNames, imageUrl, id], index) => (
          <CSSTransition key={id} timeout={120} classNames="fade">
            <li key={id}>
              <Link to={`/${id}`}>
                <div className="card">
                  <img
                    className={`PokemonImage`}
                    src={imageUrl}
                    alt={`Pokemon ${pokemonName}`}
                  />
                 

                  <h3>{pokemonName}</h3>
                
                </div>
              </Link>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </section>
  );
};

export default PokemonListPage;
