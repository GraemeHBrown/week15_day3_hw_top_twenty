import React from 'react';
import TopTwentyList from '../components/TopTwentyList.js'

class TopTwentyContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topTwentySongs: []

        }
    }

    componentDidMount() {
        const request = new XMLHttpRequest();
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
        request.open('GET', url);
        request.setRequestHeader('accept', 'application/json');
        request.addEventListener('load', () => {
            if (request.status !== 200) return;

            const songObjects = JSON.parse(request.responseText);
            this.setState({topTwentySongs: songObjects.feed.entry});
        })
        request.send();
    }

    render() {
        const chartEntries = this.state.topTwentySongs;
        console.log('Chart detail:', chartEntries);
        return (
            <div>
            <h1>Top Twenty</h1>
            <TopTwentyList chartPositions={chartEntries}/>
            </div>
        )
    };
}

export default TopTwentyContainer;