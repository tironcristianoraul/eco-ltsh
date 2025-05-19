import { useCallback, useState } from 'react';
import { createPost, getAllPosts, getSinglePost, type IPost } from './index.actions';
import type { CreatePostFields } from '../../views/add';

export interface PostReturnType<T extends IPost | IPost[]> {
    post: T;
    create: (postFields: CreatePostFields) => void;
    getAll: () => void;
    getSingle: (id: string) => void
}

function usePost<T extends IPost | IPost[]>(): PostReturnType<T> {

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

    const getSingle = useCallback(
        async (id: string) => {
            try {
                const res = await getSinglePost(id);
                if (typeof res != 'string')
                    setPost(res);
            } catch (errorMessage) {
                console.error(errorMessage);
            }
        },
        []
    );

    return {
        post: post as T,
        create,
        getAll,
        getSingle
    };
}

export default usePost;
