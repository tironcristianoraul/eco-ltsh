/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Typography, Input } from "@mui/material";
import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import "./quill.snow.css";
import ReactQuill from "react-quill-new";
import { EditorWrapper } from "./index.styled";

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
  imageLinks: string;
  setImageLinks: Dispatch<SetStateAction<string>>;
  edit?: boolean;
};

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
  imageLinks,
  setImageLinks,
}: Props) => {
  const [plainText, setPlainText] = useState<string>(value);
  const [plainLinks, setPlainLinks] = useState<string>(imageLinks);
  const [textChange, setTextChange] = useState<boolean>(false);
  const [isReadyToSubmit, setIsReadyToSubmit] = useState<boolean>(false);
  const quillRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    // Button is enabled ONLY if at least TWO fields have content
    const hasPlainText = !!plainText.trim();
    const hasTitle = !!title.trim();
    const hasCategories = !!categories.trim();

    console.log(imageLinks);

    const filledFields = [hasPlainText, hasTitle, hasCategories].filter(
      Boolean
    ).length;

    // console.log(filledFields);

    setIsReadyToSubmit(
      conditions &&
        (edit
          ? textChange || filledFields >= 3
          : filledFields >= 3 && imageLinks.length > 0)
    );
  }, [plainText, title, categories, conditions, imageLinks]);

  return (
    <EditorWrapper>
      <Input
        onChange={(e) => {
          setTitle(e.target.value);
          setTextChange(true);
        }}
        value={title}
        placeholder="Titlu"
        fullWidth
      />
      <Input
        onChange={(e) => {
          setCategories(e.target.value);
          setTextChange(true);
        }}
        value={categories}
        placeholder="Categorie"
        fullWidth
      />

      {/* <Box
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
          gap: 5,
        }}
      >
        {images.length +
          (existingPhotos?.filter((p) => !photosToDelete?.includes(p))
            ?.length || 0) >=
          MAX_IMAGES && (
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
              cursor: "pointer",
            }}
          >
            Choose Files
          </Box>
        </label>
        <Box display="flex">
          <Masonry columns={2} spacing={1} sx={{ width: "100%" }} sequential>
            {edit &&
              onDeletePhotos &&
              existingPhotos
                ?.filter((prev) => !photosToDelete?.includes(prev))
                ?.map((p, i) => (
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
                  setImages((prev) => prev.filter((_, i) => i !== index));
                }}
              />
            ))}
          </Masonry>
        </Box>
      </Box> */}

      <ReactQuill
        ref={linksRef}
        theme="snow"
        modules={{ toolbar: "false" }}
        value={plainLinks}
        placeholder="Link imagini"
        onChange={(content, __, ___, editor) => {
          setPlainLinks(content);
          setImageLinks(editor.getText().trim());
        }}
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
    </EditorWrapper>
  );
};

export default TextEditor;
