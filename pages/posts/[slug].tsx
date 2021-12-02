import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Error from 'next/error';
import Head from 'next/head';
import { Fragment } from 'react';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../helper/posts-util';
import { Post } from '../../types/post';

interface SinglePostPageProps {
    post: Post | null;
}

const SinglePostPage: NextPage<SinglePostPageProps> = ({ post }) => {
    if (!post) {
        return <Error statusCode={404} />;
    }

    return (
        <Fragment>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt} />
            </Head>
            <PostContent post={post} />
        </Fragment>
    );
};

export const getStaticProps: GetStaticProps = (context) => {
    const { params } = context;

    if (params) {
        const slug = params.slug as string;
        const postData = getPostData(slug);

        return {
            props: {
                post: postData,
            },
            revalidate: 600,
        };
    }
    return {
        props: {
            post: null,
        },
    };
};

export const getStaticPaths: GetStaticPaths = () => {
    const postsFileNames = getPostsFiles();

    const slugs = postsFileNames.map((fileName) =>
        fileName.replace(/\.md$/, '')
    );

    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
};

export default SinglePostPage;
