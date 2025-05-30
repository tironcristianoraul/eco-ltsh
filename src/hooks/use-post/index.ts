import { useCallback, useState } from 'react';
import { createPost, deleteSinglePost, getAllPosts, getSinglePost, updatePost, type IPost } from './index.actions';
import type { CreatePostFields } from '../../views/add';
import type { UpdatePostFields } from '../../views/update-post';

export interface PostReturnType<T extends IPost | IPost[]> {
    post: T;
    isError: boolean;
    create: (postFields: CreatePostFields) => void;
    getAll: () => void;
    getSingle: (id: string) => void;
    deletePost: (id: string) => void;
    update: (postFields: UpdatePostFields, id: string) => void;
}

function usePost<T extends IPost | IPost[]>(): PostReturnType<T> {

    const [post, setPost] = useState<IPost | IPost[]>([]);
    const [isError, setIsError] = useState<boolean>(false);

    const create = useCallback(
        async (u: CreatePostFields) => {
            try {
                await createPost(u);
                setIsError(false);

            } catch (errorMessage) {
                console.error(errorMessage);
                setIsError(true);
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
                setIsError(false);
            } catch (errorMessage) {
                console.error(errorMessage);
                setIsError(true);
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
                setIsError(false);
            } catch (errorMessage) {
                console.error(errorMessage);
                setIsError(true);
            }
        },
        []
    );

    const deletePost = useCallback(
        async (id: string) => {
            try {
                await deleteSinglePost(id);
                setIsError(false);
            } catch (errorMessage) {
                console.error(errorMessage);
                setIsError(true)
            }
        },
        []
    );

    const update = useCallback(
        async (u: UpdatePostFields, id: string) => {
            try {
                await updatePost(u, id);
                setIsError(false);
            } catch (errorMessage) {
                console.error(errorMessage);
                setIsError(true)
            }
        },
        []
    );

    return {
        post: post as T,
        create,
        getAll,
        getSingle,
        deletePost,
        isError,
        update
    };
}

export default usePost;
