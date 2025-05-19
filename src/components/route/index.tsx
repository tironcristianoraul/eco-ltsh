import { Outlet } from 'react-router';
import Header from '../header';
import { AppWrapper } from './index.styled';
import { useLocation } from 'react-router';
import { useEffect } from 'react';

const CommonRoute = () => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <AppWrapper >
            <Header />
            <Outlet />
        </AppWrapper>
    );

};

export default CommonRoute;
