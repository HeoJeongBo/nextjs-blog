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
