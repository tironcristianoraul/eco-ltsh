import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

const Home = () => {

    const { logout } = useAuth();

    return (
        <>
            <Link to={"/"}>home</Link>
            <Link to={"/post/1"}>post</Link>
            <Link to={"/add"}>add</Link>
            <Link to={"/sign-in"}>sign-in</Link>
            <Button onClick={logout}>logout</Button>
        </>
    )
}

export default Home;