import React, {useContext, useState} from "react";
import styled from "styled-components";
import SideBarTrack from "./SideBarTrack/SideBarTrack";
import {API_URL, TrackContext} from "../context";
import {SideBarNavigation} from "./SideBarNavigation/SideBarNavigation";
import Upload from "./Favourites/Upload";
import Search from "./Search/Search";
import {useForm} from "react-hook-form";
import './sidebar.scss'
import {AiOutlineMenu, AiOutlineReload} from 'react-icons/ai'

const LeftBarWrapper = styled.div`
  position: absolute;
  left: -370px;
  width: 350px;
  height: 85vh;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: start;
  border-radius: 10px;
  margin: 20px;
  backdrop-filter: blur(5px);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 1s;
`

export default function SideBar({ ...props }) {
    const [currentTrack, setTrack] = useContext(TrackContext)
    const [currentPage, setPage] = useState('popular')
    const [query, setQuery] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showStatus, setShowStatus] = useState(true)

    const { register, formState: { errors }, handleSubmit } = useForm();

    function LeftBarElements() {
        return <>
            {props.props.data.map((track) =>
                track.id == currentTrack?.id ? (
                    <SideBarTrack key={'track_id: ' + track.id} props={track} refetch={props.refetch}
                                  active={true}
                    />
                ) : (
                    <SideBarTrack key={'track_id: ' + track.id} props={track} refetch={props.refetch}
                                  active={false}
                    />
                )
            )}
        </>;
    }

    return(
        <LeftBarWrapper className={showStatus ? 'side-bar-wrapper shown' : 'side-bar-wrapper'}>
            <SideBarNavigation currentPage={currentPage} setPage={setPage} />
            <AiOutlineMenu
                onClick={ () => setShowStatus(!showStatus) }
                className={'hide-button'}
                style={{
                    color: 'white',
                    position: 'absolute',
                    top: (showStatus ? '-5%' : '10px'),
                    right: (showStatus ? '40%' : '-50px'),
                    fontSize: '23pt',
                    transition: 'all 1s'
                }}
            />

            <AiOutlineReload
                onClick={ () => props.refetch() }
                className={'reload-button'}
                style={{
                    color: 'white',
                    position: 'absolute',
                    top: (showStatus ? '-5%' : '-20px'),
                    right: (showStatus ? '50%' : '-50px'),
                    fontSize: '23pt',
                    transition: 'all 1s'
                }}
            />
            {currentPage === 'popular' && LeftBarElements()}
            {currentPage === 'upload' && Upload(register, handleSubmit, errors, props.refetch)}
            {currentPage === 'profile' && Search(query, setQuery, props.refetch, currentTrack, setTrack, searchResult, setSearchResult)}
        </LeftBarWrapper>
    )
}
