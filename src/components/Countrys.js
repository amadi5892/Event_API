import React from 'react'
import axios from 'axios'
import CountryCard from './CountryCard'


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: [],
            info2: [],
            country: '',
        }
    }

    async getAnswer () {
        try {
        const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=${this.state.country}`)
        console.log(response.data)
        this.setState({info: response.data.countrys}); 
        

    } catch {

    }
}

handleSubmission(e) {
    e.preventDefault()
    this.getAnswer()
}

handleChange(e) {
    this.setState({country: e.target.value})
}

    
    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Search" onChange={this.handleChange}></input> 
                    <button type="submit" onClick={this.handleSubmission}>Submit</button>
                </form>
                {this.state.info2.strSport}
                {this.state.info.map( (place) => {
                    return (
                        <CountryCard 
                        name={place.strSport}
                        league={place.strLeague}
                        leagueFullName={place.strLeagueAlternate}
                        country={place.strCountry}
                        description={place.strDescriptionEN}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Home