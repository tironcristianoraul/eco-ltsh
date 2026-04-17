/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import usePost from "../../hooks/use-post";
import type { CreatePostFields } from "../add";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { Box } from "@mui/material";
import type { IPost } from "../../hooks/use-post/index.actions";
import TextEditor from "../../components/quill-editor";

export type UpdatePostFields = CreatePostFields;

const UpdatePost = () => {
	const { update, isError, getSingle, post } = usePost<IPost>();

	const [value, setValue] = useState<string>("");
	const [title, setTitle] = useState<string>("");
	const [category, setCategory] = useState<string>("");
	const [images, setImages] = useState<string>("");

	const navigate = useNavigate();
	const { id } = useParams();

	const handleSubmit = async () => {
		await update(
			{
				imageLink: images.split("\n") || [""],
				title,
				category,
				content: value,
			},
			id as string,
		);
		if (!isError) navigate("/post");
	};

	useEffect(() => {
		getSingle(id as string);
	}, []);

	useEffect(() => {
		if (post) {
			setValue(post.content || "");
			setTitle(post.title || "");
			setCategory(post.category || "");
			setImages(post.imageLinks?.join("\n") || "");
		}
	}, [post]);

	// console.log(value, title, category, images, photosToDelete, imageChange);

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
						setImageLinks={setImages}
						edit={true}
						imageLinks={images}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default UpdatePost;
