/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import usePost from "../../hooks/use-post";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import type { IPost } from "../../hooks/use-post/index.actions";
import { url } from "../../utils/axios/constants";
import FABMenu from "../../components/fab-menu";
import Carousel from "../../components/carousel";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { useAppSelector } from "../../store/hooks";
import useAuth from "../../hooks/use-auth";

const SinglePost = () => {

    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const { getSingle, post, deletePost, isError } = usePost<IPost>();
    const { id } = useParams();
    const navigate = useNavigate();
    const {isLoggedIn} = useAuth();

    useEffect(() => {
        getSingle(id as string);
    }, []);


    const handleToggle = () => {
        setOpen(prev => !prev);
    };

    const handleEdit = () => {
        navigate(`/post/update/${id}`)
    }

    const handleDelete = async () => {
        await deletePost(post._id);
        if (!isError)
            navigate('/post')
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography>{post.title}</Typography>
            <Typography>{post.category}</Typography>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            {
                Array.isArray(post.imageNames) &&
                <img crossOrigin="anonymous" src={`${url}/uploads/${post?.imageNames[0]}`} width="auto" style={{maxHeight: '80vh'}} onClick={() => setOpenModal(true)}/>
            }
            <Modal open={openModal} onClose={() => setOpenModal(false)} >
                {Array.isArray(post.imageNames) ? (
                    <Box
                        sx={{
                            position: 'relative', // Key change: Make this Box the positioning context
                            width: '100%',
                            height: '100%',
                            display: 'flex', // Often useful for centering content within the modal
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Carousel images={post.imageNames} />
                        <IconButton onClick={() => setOpenModal(false)} sx={{ position: 'absolute', left: '10px', top: '40px', zIndex: 1 }}>
                            <ClearOutlinedIcon sx={{ fontSize: '50px', color: '#fff' }} />
                        </IconButton>
                    </Box>
                ) : (<></>)}
            </Modal>
            {isLoggedIn && (<Box
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
            </Box>)}
        </Box>
    )
}

export default SinglePost