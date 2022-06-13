import React from "react";
import useAxios from "axios-hooks";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'

import 'react-h5-audio-player/lib/styles.css';
import './Player.scss'
import {Author, CoverImage, CoverImageWrapper, Title, TrackWrapper} from './Track.styles'

export default function Track() {
    const [{data, loading, error}, refetch] = useAxios({
        url: 'http://localhost:3001/api/v1/track'
    })

    if (loading) return console.log('Loading...')
    if (error) return console.log(error)

    const el = data.data[1].attributes
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
                src={track_url}
                customAdditionalControls={[]}
            />
        </TrackWrapper>
    )
}
