import ReactMarkdown from 'react-markdown';

import type { Post } from '../../../types/post';
import PostHeader from './post-header';

import classess from './post-content.module.css';

interface PostContentProps {
    post: Post;
}

const DUMMY_POST: Post = {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a the React Fraework for production',
    date: '2022-02-10',
    content: '## hihi',
};

const PostContent: React.FC = () => {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
    console.log(imagePath);

    return (
        <article className={classess.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />
            <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
        </article>
    );
};

export default PostContent;
