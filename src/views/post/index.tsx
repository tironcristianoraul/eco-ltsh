import { useEffect } from "react";
import Card from "../../components/cards";
import usePost from "../../hooks/use-post";
import { url } from "../../utils/axios/constants";


const Post = () => {

    const { getAll, post } = usePost();

    useEffect(() => {
        getAll();
    }, [])

    console.log(post);

    return (
        <>
            <div>Post</div>
            {Array.isArray(post) && post.map((p, index) => (
                <Card image={`${url}/uploads/${p.image}`} title={p.title} key={`${p.title}-${index}`} />
            ))}
        </>
    )
}

export default Post;