import React from "react";
import {Button, Nav} from "react-bootstrap";

import styled from "styled-components";
import './navigation.scss'

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export function SideBarNavigation({currentPage, setPage}) {
    const setNewPage = (name) => {
        setPage(name)
    }

    return (
        <NavBar>
            <Button
                onClick={ () => setNewPage('popular') }
                className={'shadow-none m-3 navigation ' + (currentPage == 'popular' ? 'wide' : 'normal')}
                variant={(currentPage == 'popular' ? 'light' : 'outline-light')}
            >
                Tracks
            </Button>

            <Button
                onClick={ () => setNewPage('upload') }
                className={'shadow-none m-1 navigation ' + (currentPage == 'upload' ? 'wide' : 'normal')}
                variant={(currentPage == 'upload' ? 'light' : 'outline-light')}
            >
                Upload
            </Button>

            <Button
                onClick={ () => setNewPage('profile') }
                className={'shadow-none m-3 navigation ' + (currentPage == 'profile' ? 'wide' : 'normal')}
                variant={(currentPage == 'profile' ? 'light' : 'outline-light')}
            >
                Search
            </Button>
        </NavBar>
    )
}
