/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios';
import { guestRequest, request } from '../../utils/axios';
import type { CreatePostFields } from '../../views/add';

interface PromiseData {
    message: string;
}

export interface IPost {
    title: string;
    category: string;
    content: string;
    imageNames: string[];
    image: string;
    _id: string;
}

async function createPost({ category, content, images, title }: CreatePostFields): Promise<PromiseData | string> {
    try {
        const formData = new FormData();
        formData.append('data', JSON.stringify({ category, content, title }))
        images.forEach(img => {
            formData.append('files', img);
        })
        const data: PromiseData = await request.post('/upload', formData);
        return {
            message: data.message,
        }
    } catch (e) {
        const error = e as AxiosError;
        const data = error.response?.data as { error: string };
        throw new Error(data?.error || 'Failed to login.');
    }
}

async function getAllPosts(): Promise<IPost[] | string> {
    try {
        const res: any = await guestRequest.get('/posts');
        return res?.data?.posts;
    } catch (e) {
        const error = e as AxiosError;
        const data = error.response?.data as { error: string };
        throw new Error(data?.error || 'Failed to login.');
    }
}

async function getSinglePost(id: string): Promise<IPost[] | string> {
    try {
        const res: any = await guestRequest.get(`/post/${id}`);
        return res?.data?.post;
    } catch (e) {
        const error = e as AxiosError;
        const data = error.response?.data as { error: string };
        throw new Error(data?.error || 'Failed to login.');
    }
}

export { createPost, getAllPosts, getSinglePost };
