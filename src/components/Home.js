import React from 'react'
import axios from 'axios'


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: [],
            info2: [],
            inputValue: '',
        }
    }

    async getAnswer () {
        try {
        const response = await axios.get('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Danny%20Welbeck')
        console.log(response.data)
        this.setState({info: response.data}); 
        this.setState({info2: this.state.info.player[0]})

    } catch {

    }
}

componentDidMount() {
    this.getAnswer();
}


    
    render() {
        return (
            <div>
                {this.state.info2.strPlayer}
            </div>
        )
    }
}

export default Home