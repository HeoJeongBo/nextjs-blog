import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import FeaturedPosts from '../components/home/featured-posts';
import Hero from '../components/home/hero';
import { getFeaturedPosts } from '../helper/posts-util';
import { Post } from '../types/post';

interface HomeProps {
    posts: Post[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
    return (
        <div>
            <Head>
                <title>Jeongbo`s Blog</title>
                <meta name="description" content="I studying next js !" />
            </Head>
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
