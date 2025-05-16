import { type FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignIn from './sign-in';
// import Add from './add';
import Post from './post';
import Home from './home';
import Add from './add';
import useAuth from '../hooks/use-auth';
// import { AuthContext } from '../utils/context/auth';
// import useAuth from '../hooks/fetch-hooks/use-auth';
// import { request } from '../utils/config/axios';
// import CommonRoute from '../components/common/routes/common-route';
// import AuthRoute, { RedirectToAuth } from '../components/common/routes/auth-route';
// import PatientAgreement from './common/agreement';

// // COMMON
// const Patients = Loadable(lazy(() => import('./common/patients')));
// const Patient = Loadable(lazy(() => import('./common/patient')));
// const AddPatient = Loadable(lazy(() => import('./add-patient')));

// COMMON
// const Home = Loadable(lazy(() => import('./common/patients')));
// AUTH
// const SignIn = Loadable(lazy(() => import('../views/auth/login')));

const Views: FC = () => {

    const { isLoggedIn } = useAuth();

    const ProtectedRoute: React.FC<{ isLoggedIn: boolean, children: React.ReactElement }> = ({ isLoggedIn, children }) => {
        if (!isLoggedIn) {
            return <Navigate to={'/'} replace />;
        }
        return children;
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/add' element={<ProtectedRoute isLoggedIn={isLoggedIn} children={<Add />} />} />
                <Route path='/post/:id' element={<Post />} />
                <Route path='/' element={<Home />} />
            </Routes >
        </BrowserRouter >
    );
};
export default Views;









