import React from "react";
import "./fontawesome/css/all.css";
import "./Playlist.css";

function Playlist(props) {

    const selectTrack = (trackid) => {
        console.log(props)
        props.selectTrack(trackid);
    }

    return (
        <div className="flex-container-v" id="playlist">
            <div className="flex-container-h">
                <div id="goback"></div>
                <div id="album_title">
                    <div id="artist">Noiva</div>
                    <div id="album">Beside the point</div>
                    <span id="year">2022</span>0
                </div>
            </div>
            <div id="playlist_list">
                <br/>
                <table>
                    <tbody>
                        {props.tracklist.map((track) => (
                            <tr 
                                className={props.selectedTrack === track.id ? 'track_row selected' : 'track_row'} 
                                key={track.id}
                                onClick={() => selectTrack(track.id)}>
                                <td className="table_track_number">
                                    <div className="playicon"></div>
                                    <span className="track_num">{track.id}</span>
                                </td>
                                <td className="table_track_name">{track.name}</td>
                                <td className="table_duration">{track.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div id="download_or_donate">
                    Download the album and/or donate bitcoin to support the artist.
                </div>
                <div id="my_buttons">
                    <div id="download_button" className="float_buttons">D</div>
                    <div id="bitcoin_button" className="float_buttons">B</div>
                </div>
                <div>
                    <code id="wallet">0xee226379db83cffc681495730c11fdde79ba4c0c</code>
                </div>
            </div>
        </div>
    )

}

export default Playlist;