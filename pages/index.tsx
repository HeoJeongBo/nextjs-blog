import type { GetStaticProps, NextPage } from 'next';
import FeaturedPosts from '../components/home/featured-posts';
import Hero from '../components/home/hero';
import { getFeaturedPosts } from '../helper/posts-util';
import { Post } from '../types/post';

const DUMMY_POSTS: Post[] = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is a the React Fraework for production',
        date: '2022-02-10',
        content: '##',
    },
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is a the React Fraework for production',
        date: '2022-02-10',
        content: '##',
    },
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is a the React Fraework for production',
        date: '2022-02-10',
        content: '##',
    },
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is a the React Fraework for production',
        date: '2022-02-10',
        content: '##',
    },
];

interface HomeProps {
    posts: Post[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
    return (
        <div>
            <Hero />
            <FeaturedPosts posts={posts} />
        </div>
    );
};

export const getStaticProps: GetStaticProps<HomeProps> = () => {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts,
        },
    };
};

export default Home;
