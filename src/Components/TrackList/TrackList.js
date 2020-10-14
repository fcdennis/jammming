import React from 'react';
import './TrackList.css'

import Track from '../Track/Track'

export class TrackList extends React.Component {
    render() {
        return (
            <div class="TrackList">
                {this.props.tracks
                ? this.props.tracks.map(track => {
                        return <Track track={track} key={track.id} />
                    })
                : "Loading..."
                }
            </div>
        )
    }
}

export default TrackList
