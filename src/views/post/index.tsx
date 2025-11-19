/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Card from "../../components/cards";
import usePost from "../../hooks/use-post";
import { url } from "../../utils/axios/constants";
import { Box } from "@mui/material";
import gradientImg from "../../assets/blurry-gradient-haikei.png";
import { useNavigate } from "react-router";
// import { useNavigate } from "react-router";

const Post = () => {
  const { getAll, post } = usePost();
  const nav = useNavigate();

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      {/* <div>Post</div> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
          backgroundImage: `url(${gradientImg})`,
          backgroundSize: "cover",
        }}
      >
        {Array.isArray(post) &&
          post.map((p, index) => (
            <Card
              key={index}
              image={`${url}/uploads/${p.image}`}
              title={p.title}
              onClick={() => nav(p._id)}
            />
          ))}
      </Box>
    </>
  );
};

export default Post;
