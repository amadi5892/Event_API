import React from 'react'

function PlayerCard(props) {
    return (
        <div>
            <h1> {/* Name */} </h1>
            <h2> Team: {/* Team Name */} </h2>
            <h3> # {/* Number */} </h3>
            <h3> Position: {/* Position */} </h3>
            <p> Height: {/* Height */}kg </p>
            <p> Weight: {/* Weight */} </p>
            <p> DOB: {/* DOB */} </p>
            <p> Status: {/* Signing */} </p>
            <p> Bio: {/* Description */} </p>
        </div>
    )
}

export default PlayerCard
