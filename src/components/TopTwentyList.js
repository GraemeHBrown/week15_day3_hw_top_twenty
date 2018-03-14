import React from 'react';

import '../App.css';

const TopTwentyList = (props) => {

    if(!props.chartPositions) return null;

    const artistDetails = props.chartPositions.map((song, index) => {
        return <li key={index}>{index+1}: Title:{song['im:name'].label}, Artist: {song['im:artist'].label} </li>
    })
    return (
        <ul className='song-list' id='top-twenty'>
            {artistDetails}
        </ul>
    )
}

export default TopTwentyList;