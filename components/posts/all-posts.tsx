import type { Post } from '../../types/post';
import classess from './all-posts.module.css';
import PostsGrid from './posts-grid';

interface AllPostsProps {
    posts: Post[];
}

const AllPosts: React.FC<AllPostsProps> = ({ posts }) => {
    return (
        <section className={classess.posts}>
            <h1>All Posts</h1>
            <PostsGrid posts={posts} />
        </section>
    );
};

export default AllPosts;
