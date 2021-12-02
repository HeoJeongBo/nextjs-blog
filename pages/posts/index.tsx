import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../helper/posts-util';
import type { Post } from '../../types/post';

interface AllPostsPageProps {
    allPosts: Post[];
}

const AllPostsPage: NextPage<AllPostsPageProps> = ({ allPosts }) => {
    return (
        <div>
            <Head>
                <title>All my posts</title>
                <meta name="description" content="All Jeongbo`s post" />
            </Head>
            <AllPosts posts={allPosts} />
        </div>
    );
};

export const getStaticProps: GetStaticProps = () => {
    const allPosts = getAllPosts();

    return {
        props: {
            allPosts,
        },
    };
};

export default AllPostsPage;
