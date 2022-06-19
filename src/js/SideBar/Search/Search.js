import React from "react";
import {API_URL} from "../../context";
import axios from "axios";
import './search.scss'
import {Button, InputGroup} from "react-bootstrap";
import SideBarTrack from "../SideBarTrack/SideBarTrack";


export default function Search(query, setQuery, refetch, currentTrack, setTrack, searchResult, setSearchResult) {
    const onSubmit = () => {
        if(query !== '') {
            axios.get(API_URL + 'search', {
                params: {
                    query: query
                }
            })
                .then(function (response) {
                    setSearchResult(response.data.data)
                })
                .catch(function (error) {
                    console.log(error.response.data)
                })
        } else { console.log('Empty input field!') }
    };

    function SearchResult() {
        return <>
                {searchResult.map((track) =>
                    track.id == currentTrack?.id ? (
                        <SideBarTrack key={'track_id: ' + track.id} props={track} refetch={refetch}
                                      active={true}
                        />
                    ) : (
                        <SideBarTrack key={'track_id: ' + track.id} props={track} refetch={refetch}
                                      active={false}
                        />
                    )
                )}
        </>
    }

    return (
        <div className={'search-wrapper'}>
            <InputGroup className={'search-form'}>
                <div className="form-group form-el">
                    <input
                        className={'query search text form-control'}
                        type='text'
                        name='query'
                        placeholder='Name of music'
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>


                <Button
                    onClick={onSubmit}
                    className={'search-element btn-outline-light'}
                >
                    Search
                </Button>
            </InputGroup>

            <div className={'result-tracks-wrapper'}>
                { searchResult && SearchResult() }
            </div>
        </div>
    );
}
