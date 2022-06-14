import React, {useRef, useState} from "react";
import useAxios from "axios-hooks";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'

import 'react-h5-audio-player/lib/styles.css';
import './Player.scss'
import {Author, CoverImage, CoverImageWrapper, Title, TrackWrapper} from './Track.styles'
import {API_URL} from "../context";

function getCurrentVolume() {
    let el = document.getElementsByClassName('rhap_volume-indicator')
    return parseFloat(el[0].style.left) / 100
}

export default function Track({...props}) {
    const [isPlaying, setIsPlaying] = props.controls
    const [volume, setVolume] = useState(0.5)
    const player = useRef()

    if(props.currentTrack === undefined) return null

    const el = props.currentTrack.attributes
    const title = el.title
    const cover_image = el.image_url
    const track_url = el.track_url
    const author = el.author

    return(
        <TrackWrapper>
            <CoverImageWrapper>
                <CoverImage src={cover_image}/>
            </CoverImageWrapper>

            <Title>{title}</Title>

            <Author>{author}</Author>

            <AudioPlayer
                ref={player}
                src={track_url}
                autoPlay={isPlaying ? 'autoplay' : null}

                customAdditionalControls={[]}
                volume={volume}
                onVolumeChange={ () => setVolume(getCurrentVolume()) }
                onEnded={ () => setIsPlaying(false) }
                onPause={ () => setIsPlaying(false) }
                onPlay={ () => setIsPlaying(true) }
            />
        </TrackWrapper>
    )
}
