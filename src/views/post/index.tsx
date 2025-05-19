import { useEffect } from "react";
import Card from "../../components/cards";
import usePost from "../../hooks/use-post";
import { url } from "../../utils/axios/constants";
import { Grid } from "@mui/material";


const Post = () => {

    const { getAll, post } = usePost();

    useEffect(() => {
        getAll();
    }, [])

    console.log(post);

    return (
        <>
            <div>Post</div>
                    
            <Grid 
            container 
            spacing={2}
            justifyContent="center"
            alignItems="center"
            paddingX={2}
            >
                
                {Array.isArray(post) && post.map((p, index) => (
                    <Grid>
                        <Card image={`${url}/uploads/${p.image}`} title={p.title} key={`${p.title}-${index}`} />        
                    </Grid>
                ))}
                
            </Grid>

        </>
    )
}

export default Post;