import React, { type JSX } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import useAuth from '../../hooks/use-auth'
import { HeaderWrapper } from './index.styled'

const Header: React.FC = (): JSX.Element => {

    const { logout, isLoggedIn } = useAuth();
    console.log(isLoggedIn);


    return (
        <HeaderWrapper>
            <Link to={"/"}>home</Link>
            <Link to={"/post/1"}>post</Link>
            {!isLoggedIn ? (
                <Link to={"/sign-in"}>sign-in</Link>
            ) : (
                <>
                    <Link to={"/add"}>add</Link>
                    <Button onClick={logout}>logout</Button>
                </>
            )}
        </HeaderWrapper>
    )
}

export default Header