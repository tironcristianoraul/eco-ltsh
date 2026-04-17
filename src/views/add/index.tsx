import { Box } from "@mui/material";
import { useState } from "react";
import usePost from "../../hooks/use-post";
import { useNavigate } from "react-router";
import TextEditor from "../../components/quill-editor";

export interface CreatePostFields {
	imageLink: string[];
	title: string;
	category: string;
	content: string;
}

const Add = () => {
	const { create, isError } = usePost();

	const [value, setValue] = useState<string>("");
	const [title, setTitle] = useState<string>("");
	const [category, setCategory] = useState<string>("");
	const [imageLinks, setImageLinks] = useState<string>("");

	const navigate = useNavigate();

	const handleSubmit = async () => {
		await create({
			imageLink: imageLinks?.split("\n") || [""],
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
						imageLinks={imageLinks || ""}
						setImageLinks={setImageLinks}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default Add;
