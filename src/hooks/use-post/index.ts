import { useCallback, useState } from 'react';
import { createPost, getAllPosts, type IPost } from './index.actions';
import type { CreatePostFields } from '../../views/add';

export interface PostReturnType {
    create: (postFields: CreatePostFields) => void;
    getAll: () => void;
    post: IPost | IPost[]
}

function usePost(): PostReturnType {

    const [post, setPost] = useState<IPost | IPost[]>([]);

    const create = useCallback(
        async (u: CreatePostFields) => {
            try {
                await createPost(u);
                console.log(u);

            } catch (errorMessage) {
                console.error(errorMessage);
            }
        },
        []
    );

    const getAll = useCallback(
        async () => {
            try {
                const res = await getAllPosts();
                if (typeof res != 'string')
                    setPost(res);
            } catch (errorMessage) {
                console.error(errorMessage);
            }
        },
        []
    );

    return {
        create,
        post,
        getAll
    };
}

export default usePost;
