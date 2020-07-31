import React from 'react'

function CountryCard(props) {
    return (
        <div>
            <h1>Sport: {props.name} </h1>
            <h3>League: {props.league} </h3>
            <p>League Full Name: {props.leagueFullName} </p>
            <p>Country: {props.country} </p>
            <p>Bio: {props.description} </p>
        </div>
    )
}

export default CountryCard
