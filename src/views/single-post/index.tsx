import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import usePost from "../../hooks/use-post";
import { Box, Typography } from "@mui/material";
import type { IPost } from "../../hooks/use-post/index.actions";
import { url } from "../../utils/axios/constants";
import FABMenu from "../../components/fab-menu";

const SinglePost = () => {

    const [open, setOpen] = useState(false);
    const { getSingle, post, deletePost, isError } = usePost<IPost>();
    const params = useParams();
    const navigate = useNavigate();

    console.log(post);


    useEffect(() => {
        getSingle(params.id as string);
    }, []);


    const handleToggle = () => {
        setOpen(prev => !prev);
    };

    const handleEdit = () => {
        console.log('work in progress :)');
    }

    const handleDelete = () => {
        deletePost(post._id);
        if (!isError)
            navigate('/post')
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography>{post.title}</Typography>
            <Typography>{post.category}</Typography>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            {Array.isArray(post.imageNames) && post.imageNames.map((photo, index) => (
                <img crossOrigin="anonymous" src={`${url}/uploads/${photo}`} width="400" key={`${index}-${photo}`} />
            ))}
            <Box
                sx={{
                    position: 'fixed',
                    top: 95,
                    right: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1.5,
                }}
            >
                <FABMenu open={open} toggle={handleToggle} editAction={handleEdit} deleteAction={handleDelete} />
            </Box>
        </Box>
    )
}

export default SinglePost