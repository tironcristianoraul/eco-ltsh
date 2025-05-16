import React, { type JSX } from 'react'
import HeaderWrapper from './index.styled'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import useAuth from '../../hooks/use-auth'

const Header: React.FC = (): JSX.Element => {

    const { logout, isLoggedIn } = useAuth();

    return (
        <HeaderWrapper>
            <Link to={"/"}>home</Link>
            <Link to={"/post/1"}>post</Link>
            <Link to={"/add"}>add</Link>
            {!isLoggedIn ? (
                <Link to={"/sign-in"}>sign-in</Link>
            ) : (
                <Button onClick={logout}>logout</Button>
            )}
        </HeaderWrapper>
    )
}

export default Header