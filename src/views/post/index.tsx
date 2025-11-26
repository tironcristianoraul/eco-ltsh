/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import usePost from "../../hooks/use-post";
import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import ActivityCard from "../../components/activity-cards";
import { url } from "../../utils/axios/constants";
import { Masonry } from "@mui/lab";
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
                    alignItems: "center",
                    minHeight: "93vh",
                    width: "100vw",
                    // backgroundImage: `url(${gradientImg})`,
                    background: "linear-gradient(0deg, rgba(44, 126, 154, 1) 0%, rgba(57, 149, 148, 1) 9%, rgba(87, 199, 133, 1) 80%, rgba(255, 255, 255, 1) 100%)",
                }}
            >
               <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2} sx={{ width: "95%", marginTop: "20px" }}>
                    {Array.isArray(post) && post.map((p, index) => (
                        <ActivityCard
                        key={index}
                        name={p.title}
                        category={p.category}
                        imageUrl={`${url}/uploads/${p.image}`}
                        onClick={() => nav(`/post/${p._id}`)}
                        />
                    ))}
                    </Masonry>
            </Box>
        </>
    )
}

export default Post;
