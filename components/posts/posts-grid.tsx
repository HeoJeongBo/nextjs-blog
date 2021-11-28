import PostItem from './post-item';
import classes from './posts-grid.module.css';
import type { Post } from '../../types/post';

interface PostGridProps {
    posts: Post[];
}

const PostsGrid: React.FC<PostGridProps> = ({ posts }) => {
    return (
        <ul className={classes.grid}>
            {posts.map((post, idx) => (
                <PostItem key={idx} post={post} />
            ))}
        </ul>
    );
};

export default PostsGrid;
