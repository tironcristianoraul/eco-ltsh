import { Outlet } from "react-router";
import Header from "../header";
import { AppWrapper } from "./index.styled";
import Footer from "../footer";

const CommonRoute = () => {
  return (
    <AppWrapper>
      <Header />
      <Outlet />
      <Footer />
    </AppWrapper>
  );
};

export default CommonRoute;
