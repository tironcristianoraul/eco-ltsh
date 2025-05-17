import {
    Box,
} from "@mui/material";
import { useState } from "react";
import TextEditor from "../../components/quill-editor";
import usePost from "../../hooks/use-post";

export interface CreatePostFields {
    images: File[];
    title: string,
    category: string;
    content: string;
}

const Add = () => {

    const { create } = usePost();

    const [value, setValue] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [images, setImages] = useState<File[]>([]);

    const handleSubmit = () => {
        create({
            images,
            title,
            category,
            content: value
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);

            setImages(prev => {
                // Calculate remaining slots
                const remainingSlots = 10 - prev.length;
                if (remainingSlots <= 0) return prev;

                // Only add up to the remaining slots
                const filesToAdd = selectedFiles.slice(0, remainingSlots);
                return [...prev, ...filesToAdd];
            });
        }
    };

    console.log(images);


    return (
        <Box flex={1} display="flex" flexDirection="column">
            <Box flex={1} display="flex" flexDirection="column">
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
                    />
                </Box>
                <input type="file" multiple onChange={(e) => handleChange(e)} />
                {images.map(img => (
                    <img src={URL.createObjectURL(img)} key={img.name} />
                ))}
            </Box>
        </Box>
    );
};

export default Add;