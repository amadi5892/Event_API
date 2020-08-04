import React from 'react'
import axios from 'axios'
import PlayerCard from './PlayerCard'


class Player extends React.Component {
    constructor() {
        super();

        this.state = {
            info: [],
            firstName: '',
            secondName: '',
            info2: [],
        }
    }

    async getAnswer () {
        try {
        const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${this.state.firstName}%20${this.state.secondName}`)
        // console.log(response.data)
        this.setState({info: response.data.player});
        // console.log(this.state.info[0].strSport)
        this.setState({info2: this.state.info});

    } catch {

    }
}


handleSubmission = (e) => {
    e.preventDefault()
    this.getAnswer()
}

handleChange1 = (e) => {
    this.setState({firstName: e.target.value})
}

handleChange2 = (e) => {
    this.setState({secondName: e.target.value})
}

    
    render() {
        return (
            <div className="bgd-country">
                <form className="form">
                    <input type="text" placeholder="First Name" onChange={this.handleChange1}></input>
                    <input type="text" placeholder="Last Name" onChange={this.handleChange2}></input> 
                    <button  type="submit" onClick={this.handleSubmission}>Submit</button>
                </form>
                {() => {return (this.state.info[0].strSport)}}
                {this.state.info.map( (person) => {
                    return (
                        <PlayerCard 
                        name={person.strPlayer}
                        league={person.strSport}
                        firstTeam={person.strTeam}
                        secondTeam={person.strTeam2}
                        country={person.strNationality}
                        description={person.strDescriptionEN}
                        />
                    )
                })}
                
            </div>
        )
    }
}

export default Player