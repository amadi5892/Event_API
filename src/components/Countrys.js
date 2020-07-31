import React from 'react'
import axios from 'axios'
import PlayerCard from './PlayerCard'


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
                    <input type="text" placeholder="Search" onChange={handleChange}></input> 
                    <button type="submit" onClick={handleSubmission}>Submit</button>
                </form>
                {this.state.info2.strSport}

            </div>
        )
    }
}

export default Home