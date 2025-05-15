import { type FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './sign-in';
// import Add from './add';
import Post from './post';
import Home from './home';
import Add from './add';
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
    // const auth = useAuth();
    // const role = 'doctor';
    // useBeforeUnload(
    //     useCallback(() => {
    //         role && request.post('auth/fake-logout');
    //     }, [role])
    // );

    // const isLoggedIn: boolean = useAppSelector((state: RootState) => state?.userState?.isLoggedIn);
    // const dispatch = useAppDispatch();

    // const ProtectedRoute: React.FC<{ isLoggedIn: boolean, children: React.ReactElement }> = ({ isLoggedIn, children }) => {
    //     if (!isLoggedIn) {
    //         dispatch(showLoginAction());
    //         return <Navigate to={'/'} replace />;
    //     }
    //     return children;
    // };
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/add' element={<Add />} />
                <Route path='/post/:id' element={<Post />} />
                <Route path='/' element={<Home />} />
            </Routes >
        </BrowserRouter >
    );
};
export default Views;









