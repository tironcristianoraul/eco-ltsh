import { useEffect } from "react";
import { useParams } from "react-router"
import usePost from "../../hooks/use-post";
import { Box, Typography } from "@mui/material";
import type { IPost } from "../../hooks/use-post/index.actions";
import { url } from "../../utils/axios/constants";

const SinglePost = () => {

    const { getSingle, post } = usePost<IPost>();
    const params = useParams();

    console.log(post);


    useEffect(() => {
        getSingle(params.id as string);
    }, [])

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography>{post.title}</Typography>
            <Typography>{post.category}</Typography>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            {Array.isArray(post.imageNames) && post.imageNames.map((photo, index) => (
                <img crossOrigin="anonymous" src={`${url}/uploads/${photo}`} width="400" key={`${index}-${photo}`} />
            ))}
        </Box>
    )
}

export default SinglePost