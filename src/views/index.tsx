import { type FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./sign-in";
// import Add from './add';
import Post from "./post";
import Home from "./home";
import Add from "./add";
import AddPlant from "./add-plant";
import useAuth from "../hooks/use-auth";
import CommonRoute from "../components/route";
import SinglePost from "./single-post";
import UpdatePost from "./update-post";
import QR from "./plant/qr";
import Plants from "./plants";
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
  console.log(isLoggedIn);

  const ProtectedRoute: React.FC<{
    isLoggedIn: boolean;
    children: React.ReactElement;
  }> = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
      return <Navigate to={"/"} replace />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<CommonRoute />}>
          <Route
            path="/add"
            element={
              <ProtectedRoute isLoggedIn={!!isLoggedIn} children={<Add />} />
            }
          />
          <Route
            path="/add-plant"
            element={
              <ProtectedRoute
                isLoggedIn={!!isLoggedIn}
                children={<AddPlant />}
              />
            }
          />
          <Route path="/post" element={<Post />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/post/update/:id" element={<UpdatePost />} />
          <Route path="/plant/:id" element={<QR />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Views;
