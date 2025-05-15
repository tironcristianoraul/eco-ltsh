import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <>
            <div>SignIn</div>
            <Link to={"/"}>home</Link>
            <Link to={"/post/1"}>post</Link>
            <Link to={"/add"}>add</Link>
            <Link to={"/sign-in"}>sign-in</Link>
        </>
    )
}

export default SignIn;