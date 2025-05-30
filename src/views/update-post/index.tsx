/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import usePost from "../../hooks/use-post";
import type { CreatePostFields } from "../add";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { Box } from "@mui/material";
import type { IPost } from "../../hooks/use-post/index.actions";
import TextEditor from "../../components/quill-editor";

export interface UpdatePostFields extends CreatePostFields {
    photosToDelete: string[]
}

const UpdatePost = () => {

    const { update, isError, getSingle, post } = usePost<IPost>();

    const [value, setValue] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [images, setImages] = useState<File[]>([]);
    const [photosToDelete, setPhotosToDelete] = useState<string[]>([]);
    const [existingPhotos, setExistingPhotos] = useState<string[]>([]);


    console.log(photosToDelete);


    const navigate = useNavigate();
    const { id } = useParams();

    const handleSubmit = async () => {
        await update({
            images,
            title,
            category,
            content: value,
            photosToDelete
        }, id as string);
        if (!isError) navigate("/post");
    };

    const onDeletePhotos = (img: string) => {
        setPhotosToDelete(prev => [...prev, img]);
    }

    useEffect(() => {
        getSingle(id as string);
    }, []);

    useEffect(() => {
        if (post) {
            setValue(post.content || "");
            setTitle(post.title || "");
            setCategory(post.category || "");
            setExistingPhotos(post.imageNames || []);
        }
    }, [post]);

    return (
        <Box flex={1} display="flex" flexDirection="column" height="100vh">
            <Box flex={1} display="flex" flexDirection="column" alignItems="center">
                <Box
                    sx={{
                        backgroundColor: "white",
                        gap: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: 2,
                    }}
                >
                    <TextEditor
                        value={value}
                        setValue={setValue}
                        title={title}
                        setTitle={setTitle}
                        categories={category}
                        setCategories={setCategory}
                        conditions={!!value && !!title && !!category}
                        submitFunction={handleSubmit}
                        images={images}
                        setImages={setImages}
                        onDeletePhotos={onDeletePhotos}
                        existingPhotos={existingPhotos}
                        edit={true}
                        photosToDelete={photosToDelete}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default UpdatePost