import React, {useRef, useState} from "react";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'

import 'react-h5-audio-player/lib/styles.css';
import './Player.scss'
import {Author, CoverImage, CoverImageWrapper, Title, TrackWrapper} from './Track.styles'
import {PlayerContext} from "../../../../nota-web/src/js/context";

function getCurrentVolume() {
    let el = document.getElementsByClassName('rhap_volume-indicator')
    return parseFloat(el[0].style.left) / 100
}

export default function Track({...props}) {
    const [isAutoPlaying, setIsAutoPlaying] = props.controls
    const [volume, setVolume] = useState(0.5)
    const player = useRef()

    function playPause(active) {
        if(active) {
            player.current.audio.current.togglePlay()
        }
    }

    if(props.currentTrack === undefined) return null

    const el = props.currentTrack.attributes
    const title = el.title
    const cover_image = el.image_url
    const track_url = el.track_url
    const author = el.author

    return(
        <PlayerContext.Provider value={playPause}>
            <TrackWrapper>
                <CoverImageWrapper>
                    <CoverImage src={cover_image}/>
                </CoverImageWrapper>

                <Title>{title}</Title>

                <Author>{author}</Author>

                <AudioPlayer
                    ref={player}
                    src={track_url}
                    autoPlay={isAutoPlaying ? 'autoplay' : null}
                    customAdditionalControls={[]}
                    volume={volume}
                    onVolumeChange={ () => setVolume(getCurrentVolume()) }
                    onEnded={ () => setIsAutoPlaying(false) }
                    onPause={ () => setIsAutoPlaying(false) }
                    onPlay={ () => setIsAutoPlaying(true) }
                />
            </TrackWrapper>
        </PlayerContext.Provider>
    )
}
