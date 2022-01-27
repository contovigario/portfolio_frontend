//import logo from './logo.svg';
import React, {useState} from 'react';
import Sideplayer from '../sideplayer/Sideplayer.js';
import Playlist from '../playlist/Playlist.js';

function Player() {

    const [selectedTrack, setSelectedTrack] = useState(0);

    const selectTrack = (trackid) => {
        console.log('select track from ' + selectedTrack + ' to ' + trackid)
        setSelectedTrack(trackid);
    }

    const [menuSelected, setMenuSelected] = useState(0);

    const selectMenu = (trackid) => {
        setMenuSelected(trackid);
    }

    const tracklist = [
        {
            id:1,
            name: "Falaise",
            duration: "2:56",
            file: 'MR_JAMES.mp3',
            selected:false
        },
        {
            id:2,
            name: "Monjoq2",
            duration: "4:20",
            file: 'answers.mp3',
            selected:false
        },
        {
            id:3,
            name: "Unstopabble Force",
            duration: "2:10",
            file: 'dontneed.mp3',
            selected:false
        }
      ];

    return (
        <div className="flex-container-h">
            <Playlist 
                selectTrack = {selectTrack}
                selectedTrack = {selectedTrack}
                tracklist = {tracklist} />
            <Sideplayer 
                selectTrack = {selectTrack}
                selectedTrack = {selectedTrack}
                tracklist = {tracklist}
                />
        </div>
    );
}

export default Player;
