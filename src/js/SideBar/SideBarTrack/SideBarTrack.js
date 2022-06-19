import React, {useContext} from "react";
import styled from "styled-components";
import {API_URL, TrackContext} from "../../context";
import {PlayerContext} from "../../context";
import { FontAwesome } from 'react-icons/fa'
import {FaTrash} from "react-icons/fa"


import './sideBarTrack.scss'
import axios from "axios";

const SideBarTrackStyled = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 5px 0;
  border-radius: 6px;
  margin: 5px 10px;
  transition: all 0.7s;
`

const TrackCoverWrapper = styled.div`
  width: 100px;
  height: 100px;
`

const TrackCover = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px 0 0 5px;
  object-fit:cover;
`

const TrackData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`

export default function SideBarTrack({ ...props }) {
    const [, setTrack] = useContext(TrackContext)

    function deleteTrack(id) {
        axios.delete(API_URL + `track/${id}`)
            .then(function (response){
                setTimeout(() => {  setTrack(undefined); props.refetch(); }, 500)
            })
            .catch(function (error) {
                console.log (error.response.data)
            })
    }

    return(
        <SideBarTrackStyled
            className={ props.active ? 'active' : 'inactive' }
            onClick={() => { setTrack(props.props) }}
        >
            <TrackCoverWrapper>
                <TrackCover src={props.props.attributes.image_url}/>
            </TrackCoverWrapper>

            <TrackData>
                <p>{props.props.attributes.title}</p>
                <p>{props.props.attributes.author}</p>
            </TrackData>

            <FaTrash
                onClick={ () => deleteTrack(props.props.attributes.id)}
                style={{
                position: "absolute",
                right: '20px'
            }}></FaTrash>
        </SideBarTrackStyled>
    )
}
