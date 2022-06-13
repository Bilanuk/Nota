import React, {useRef, useState} from "react";
import useAxios from "axios-hooks";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'

import 'react-h5-audio-player/lib/styles.css';
import './Player.scss'
import {Author, CoverImage, CoverImageWrapper, Title, TrackWrapper} from './Track.styles'

function getCurrentVolume() {
    let el = document.getElementsByClassName('rhap_volume-indicator')
    return parseFloat(el[0].style.left) / 100
}

export default function Track({id}) {
    const [{data, loading, error}, refetch] = useAxios({
        url: `http://localhost:3001/api/v1/track/${id}`
    })

    const [volume, setVolume] = useState(0.5)
    const player = useRef()

    if (loading) return console.log('Loading...')
    if (error) return console.log(error)
    if (data.data === null) return null

    const el = data.data.attributes
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
                customAdditionalControls={[]}
                volume={volume}
                onVolumeChange={() => {setVolume(getCurrentVolume())}}
            />
        </TrackWrapper>
    )
}
