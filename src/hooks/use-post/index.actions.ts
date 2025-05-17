/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios';
import { request } from '../../utils/axios';
import type { CreatePostFields } from '../../views/add';

interface PromiseData {
    message: string;
}

async function createPost({ category, content, images, title }: CreatePostFields): Promise<PromiseData | string> {
    try {
        const formData = new FormData();
        formData.append('data', JSON.stringify({ category, content, title }))
        images.forEach(img => {
            formData.append('files', img);
        })
        const data: any = await request.post('/upload', formData);
        return {
            message: data.message,
        }
    } catch (e) {
        const error = e as AxiosError;
        const data = error.response?.data as { error: string };
        throw new Error(data?.error || 'Failed to login.');
    }
}

export { createPost };
