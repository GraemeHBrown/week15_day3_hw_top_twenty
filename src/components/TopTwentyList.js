import React from 'react';

import '../App.css';

const TopTwentyList = (props) => {

    if (!props.chartPositions) return null;

    const artistDetails = props.chartPositions.map((song, index) => {
        return <tr key={index}>
            <td>{index + 1}</td>
            <td>{song['im:name'].label}</td>
            <td> {song['im:artist'].label}</td>
        </tr>
    })
    return (
        <table className='song-list' id='top-twenty'>
            <thead className='list-header'>
            <tr >
                <th>Position</th>
                <th>Title</th>
                <th>Artist</th>
            </tr>
            </thead>
            {artistDetails}
        </table>
    )
}

export default TopTwentyList;