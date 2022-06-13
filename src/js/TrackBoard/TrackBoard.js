import React from "react";
import Track from "../Track/Track";
import useAxios from "axios-hooks";

export default function TrackBoard() {
    const [{data, loading, error}, refetch] = useAxios({
        url: 'http://localhost:3001/api/v1/track'
    })

    if (loading) return console.log('Loading...')
    if (error) return console.log(error)

    return (
        <>
            {data.data.map((track) =>
                <Track key={'track_id: ' + track.id} props={track}/>
            )}
        </>
    )
}
