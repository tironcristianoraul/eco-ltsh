/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Typography, Input } from "@mui/material";
import { useCallback, useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import "./quill.snow.css";
import ReactQuill from 'react-quill-new';
import { Masonry } from "@mui/lab";
import { EditorWrapper } from "./index.styled";
import DeletableImage from "../deletable-image";
import { url } from "../../utils/axios/constants";

const modules = {
    toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["clean"],
    ],
};

const formats = ["header", "bold", "italic", "underline", "list"];

type Props = {
    conditions?: boolean;
    submitFunction: () => void;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    title: string;
    setTitle: Dispatch<SetStateAction<string>>;
    categories: string;
    setCategories: Dispatch<SetStateAction<string>>;
    images: File[];
    setImages: Dispatch<SetStateAction<File[]>>;
    edit?: boolean;
    onDeletePhotos?: (img: string) => void;
    existingPhotos?: string[];
    photosToDelete?: string[];
};

const MAX_IMAGES = 10;

const TextEditor = ({
    conditions = true, // default to true if not provided
    edit = false, // default to false if not provided
    submitFunction,
    value,
    setValue,
    title,
    setTitle,
    categories,
    setCategories,
    images,
    setImages,
    onDeletePhotos,
    existingPhotos,
    photosToDelete
}: Props) => {
    const [plainText, setPlainText] = useState<string>("");
    const [dragOver, setDragOver] = useState(false);
    const [isReadyToSubmit, setIsReadyToSubmit] = useState<boolean>(false);
    const quillRef = useRef(null);

    useEffect(() => {
        // Button is enabled ONLY if at least TWO fields have content
        const hasPlainText = !!plainText.trim();
        const hasTitle = !!title.trim();
        const hasCategories = !!categories.trim();

        const filledFields = [hasPlainText, hasTitle, hasCategories].filter(
            Boolean
        ).length;

        setIsReadyToSubmit(conditions && filledFields >= 3);
    }, [plainText, title, categories, conditions]);

    const addFiles = useCallback((newFiles: File[]) => {
        setImages(prev => {
            const remainingExisting = existingPhotos?.filter(p => !photosToDelete?.includes(p)).length || 0;
            const totalCount = prev.length + remainingExisting;
            const remainingSlots = MAX_IMAGES - totalCount;

            if (remainingSlots <= 0) return prev;

            const filesToAdd = newFiles.slice(0, remainingSlots);

            const uniqueFiles = filesToAdd.filter(file => !prev.some(p => p.name === file.name && p.size === file.size));

            return [...prev, ...uniqueFiles];
        });
    }, [existingPhotos, photosToDelete]);

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            addFiles(Array.from(e.target.files));
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragOver(false);
        if (e.dataTransfer.files) {
            addFiles(Array.from(e.dataTransfer.files));
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragOver(false);
    };

    return (
        <EditorWrapper>
            <Input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="Titlu"
                fullWidth
            />
            <Input
                onChange={(e) => setCategories(e.target.value)}
                value={categories}
                placeholder="Categorie"
                fullWidth
            />

            <Box
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                sx={{
                    border: "2px dashed gray",
                    padding: 10,
                    textAlign: "center",
                    marginTop: 2,
                    backgroundColor: dragOver ? "#f0f0f0" : "transparent",
                    transition: "background-color 0.2s",
                    borderRadius: 2,
                    gap: 5
                }}
            >
                {images.length + (existingPhotos?.filter(p => !photosToDelete?.includes(p))?.length || 0) >= MAX_IMAGES && (
                    <Box color="red" mt={1}>
                        You can upload up to {MAX_IMAGES} images only.
                    </Box>
                )}
                Drag & drop images here, or click to upload
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    style={{ display: "none" }}
                    id="upload-input"
                    onChange={handleFileInputChange}
                />
                <label htmlFor="upload-input" style={{ display: "block", margin: 8 }}>
                    <Box
                        component="span"
                        sx={{
                            backgroundColor: "#1976d2",
                            color: "white",
                            px: 2,
                            py: 1,
                            borderRadius: 1,
                            cursor: "pointer"
                        }}
                    >
                        Choose Files
                    </Box>
                </label>
                <Box display='flex'>
                    <Masonry columns={2} spacing={1} sx={{ width: '100%' }} sequential>
                        {edit && onDeletePhotos && existingPhotos?.filter(prev => !photosToDelete?.includes(prev))?.map((p, i) => (
                            <DeletableImage
                                key={i + p}
                                crossOrigin="anonymous"
                                src={`${url}/uploads/${p}`}
                                alt={p}
                                onDelete={() => onDeletePhotos(p)}
                            />
                        ))}
                        {images.map((img, index) => (
                            <DeletableImage
                                key={img.name}
                                src={URL.createObjectURL(img)}
                                alt={img.name}
                                onDelete={() => {
                                    setImages(prev => prev.filter((_, i) => i !== index));
                                }}
                            />
                        ))}
                    </Masonry>
                </Box>
            </Box>
            <ReactQuill
                ref={quillRef}
                theme="snow"
                value={value}
                modules={modules}
                formats={formats}
                onChange={(content, _, __, editor) => {
                    setValue(content);
                    setPlainText(editor.getText().trim());
                }}
            />
            <Button disabled={!isReadyToSubmit} onClick={submitFunction}>
                <Typography>Submit</Typography>
            </Button>
        </EditorWrapper >
    );
};

export default TextEditor;