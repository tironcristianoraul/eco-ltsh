/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Card from "../../components/cards";
import usePost from "../../hooks/use-post";
import { url } from "../../utils/axios/constants";
import { Box, Grid } from "@mui/material";
import gradientImg from "../../assets/blurry-gradient-haikei.png";
import { useNavigate } from "react-router";
// import { useNavigate } from "react-router";

const Post = () => {

    const { getAll, post } = usePost();
    const nav = useNavigate();

    useEffect(() => {
        getAll();
    }, [])

    return (
        <>
            {/* <div>Post</div> */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    width: "100vw",
                    backgroundImage: `url(${gradientImg})`,
                    backgroundSize: "cover",
                }}
            >
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    paddingX={2}
                    paddingTop={5}
                    paddingBottom={5}
                >

                    {Array.isArray(post) && post.map((p, index) => (
                        <Grid key={`${p.title}-${index}`}>
                            <Card
                                image={`${url}/uploads/${p.image}`} title={p.title} onClick={() => nav(p._id)} />
                        </Grid>
                    ))}

                </Grid>
            </Box>
        </>
    )
}

export default Post;
