import { useCallback } from 'react';
import { createPost } from './index.actions';
import type { CreatePostFields } from '../../views/add';

export interface PostReturnType {
    create: (postFields: CreatePostFields) => void;
}

function usePost(): PostReturnType {

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


    return {
        create,
    };
}

export default usePost;
