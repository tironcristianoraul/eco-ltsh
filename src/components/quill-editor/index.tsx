import { Box, Button, Typography, Input } from "@mui/material";
import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from 'react-quill-new';

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
};

const TextEditor = ({
    conditions = true, // default to true if not provided
    submitFunction,
    value,
    setValue,
    title,
    setTitle,
    categories,
    setCategories,
}: Props) => {
    const [plainText, setPlainText] = useState<string>("");
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

    return (
        <Box
            sx={{
                backgroundColor: "white",
                padding: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
            }}
        >
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
        </Box >
    );
};

export default TextEditor;