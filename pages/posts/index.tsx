import { NextPage } from 'next';
import AllPosts from '../../components/posts/all-posts';
import type { Post } from '../../types/post';

const DUMMY_POSTS: Post[] = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with NextJS',
        image: 'my_profile.jpeg',
        excerpt: 'NextJS is a the React Fraework for production',
        date: '2022-02-10',
    },
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with NextJS',
        image: 'my_profile.jpeg',
        excerpt: 'NextJS is a the React Fraework for production',
        date: '2022-02-10',
    },
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with NextJS',
        image: 'my_profile.jpeg',
        excerpt: 'NextJS is a the React Fraework for production',
        date: '2022-02-10',
    },
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with NextJS',
        image: 'my_profile.jpeg',
        excerpt: 'NextJS is a the React Fraework for production',
        date: '2022-02-10',
    },
];

const AllPostsPage: NextPage = () => {
    return (
        <div>
            <AllPosts posts={DUMMY_POSTS} />
        </div>
    );
};

export default AllPostsPage;
