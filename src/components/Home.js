import React from 'react'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1 className="hme-ttl">Show Down</h1>
                <div className="txt-box">
                    <h5>Welcome to the Show Down!</h5>
                    <p>Millions across the world come here to find their current or new favorite sports league to watch. Use our country search engine to find out what sports your country has to offer.</p>
                    <iframe className="vid" width="560" height="315" src="https://www.youtube.com/embed/KSddT4yIADE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div>
                        <h3>Player of the Week!</h3>
                    </div>

                </div>
            </div>
        )
    }
}
