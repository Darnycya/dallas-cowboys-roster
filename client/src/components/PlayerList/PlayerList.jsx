import React from 'react';
import { Link } from 'react-router-dom'

export default function Player(props) {
  
    return (
      <>
            <Link className="player" to={`/players/${props._id}`}>
                <img className="player-image" src={props.image} alt={props.name} />
            </Link>
        </>
    )
}
