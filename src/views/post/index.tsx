/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Card from "../../components/cards";
import usePost from "../../hooks/use-post";
import { url } from "../../utils/axios/constants";
import { Box, Grid } from "@mui/material";
import gradientImg from "../../assets/background.webp";
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
                    minHeight: "93vh",
                    width: "100vw",
                    // backgroundImage: `url(${gradientImg})`,
                    background: "linear-gradient(0deg, rgba(44, 126, 154, 1) 0%, rgba(57, 149, 148, 1) 9%, rgba(87, 199, 133, 1) 80%, rgba(255, 255, 255, 1) 100%)",
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
