import { Box } from "@mui/material";
import { useState } from "react";
import TextEditor from "../../components/quill-editor";
import usePost from "../../hooks/use-post";
import { useNavigate } from "react-router";

export interface CreatePostFields {
  images: File[];
  title: string;
  category: string;
  content: string;
}

const Add = () => {
  const { create, isError } = usePost();

  const [value, setValue] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [images, setImages] = useState<File[]>([]);

  const navigate = useNavigate();

  const handleSubmit = () => {
    create({
      images,
      title,
      category,
      content: value,
    });
    if (!isError) navigate("/post");
  };

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
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Add;
