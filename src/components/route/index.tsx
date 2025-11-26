import { Outlet } from "react-router";
import Header from "../header";
import { AppWrapper } from "./index.styled";

const CommonRoute = () => {
  return (
    <AppWrapper>
      <Header />
      <Outlet />
    </AppWrapper>
  );
};

export default CommonRoute;
