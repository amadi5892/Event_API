import React from 'react'

function CountryCard(props) {
    return (
        <div>
            <div className="card-info">
                <h1>Sport: {props.name} </h1>
                <h3>League: {props.league} </h3>
                <p><strong>League Full Name:</strong> {props.leagueFullName} </p>
                <p><strong>Country:</strong> {props.country} </p>
                <p><strong>Bio:</strong> {props.description} </p>
            </div>
        </div>
        
    )
}

export default CountryCard
