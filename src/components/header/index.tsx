import React, { type JSX } from 'react'
import { IconButton } from '@mui/material'
import useAuth from '../../hooks/use-auth'
import { Headerlink, HeaderWrapper } from './index.styled'
import Logo from '../logo';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Header: React.FC = (): JSX.Element => {

    const { logout, isLoggedIn } = useAuth();
    console.log(isLoggedIn);


    return (
        <HeaderWrapper>
            <Logo width='100px' />
            <Headerlink to={"/"}>Home</Headerlink>
            <Headerlink to={"/post/1"}>Post</Headerlink>
            {!isLoggedIn ? (
                <Headerlink to={"/sign-in"}>Sign-in</Headerlink>
            ) : (
                <>
                    <Headerlink to={"/add"}>Add</Headerlink>
                    <IconButton color='primary' onClick={logout}>
                        <LogoutOutlinedIcon />
                    </IconButton>
                </>
            )}
        </HeaderWrapper>
    )
}

export default Header