import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import type { PostData, PostMdMetaData } from '../types/post';

const postsDirectory: string = path.join(process.cwd(), 'posts');

export const getPostData = (fileName: string): PostData => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const { data, content } = matter(fileContent);

    const postSlug = fileName.replace(/\.md$/, '');
    const dataWithType = data as PostMdMetaData;

    const postData: PostData = {
        slug: postSlug,
        ...dataWithType,
        content,
    };

    return postData;
};

export const getAllPosts = (): PostData[] => {
    const postFiles = fs.readdirSync(postsDirectory);

    const allPosts = postFiles.map((postFile) => {
        return getPostData(postFile);
    });

    const sortedPosts = allPosts.sort((postA, postB) =>
        postA.date > postB.date ? -1 : 1
    );

    return sortedPosts;
};

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter((post) => post.isFeatured);

    return featuredPosts;
};
