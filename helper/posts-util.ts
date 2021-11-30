import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import type { PostData, PostMdMetaData } from '../types/post';

const postsDirectory: string = path.join(process.cwd(), 'posts');

export const getPostsFiles = () => {
    return fs.readdirSync(postsDirectory);
};

export const getPostData = (postIdentifier: string): PostData => {
    const postSlug = postIdentifier.replace(/\.md$/, '');
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const { data, content } = matter(fileContent);

    const dataWithType = data as PostMdMetaData;

    const postData: PostData = {
        slug: postSlug,
        ...dataWithType,
        content,
    };

    return postData;
};

export const getAllPosts = (): PostData[] => {
    const postFiles = getPostsFiles();

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
