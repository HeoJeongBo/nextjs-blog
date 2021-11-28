import type { NextPage } from 'next';
import FeaturedPosts from '../components/home/featured-posts';
import Hero from '../components/home/hero';
import { Post } from '../types/post';

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

const Home: NextPage = () => {
    return (
        <div>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </div>
    );
};

export default Home;
