import React from 'react'

function PlayerCard(props) {
    return (
        <div>
            <div className="card-info">
                <h1> {props.name} </h1>
                <h3>League: {props.league} </h3>
                <p><strong>Team 1:</strong> {props.firstTeam} </p>
                <p><strong>Team 2:</strong> {props.secondTeam} </p>
                <p><strong>Nationalily:</strong> {props.country} </p>
                <p><strong>Bio:</strong> {props.description} </p>
            </div>
        </div>
        
    )
}

export default PlayerCard