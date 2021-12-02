import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import type { Post } from '../../../types/post';
import PostHeader from './post-header';

import classess from './post-content.module.css';
import { Options } from 'react-markdown/lib/ast-to-react';

interface PostContentProps {
    post: Post;
}

const PostContent: React.FC<PostContentProps> = ({ post }) => {
    const { slug, image, title, content } = post;

    const imagePath = `/images/posts/${slug}/${image}`;

    const customRenderes: Options['components'] = {
        //  이부분은 타입을 우선 any로 해놓았는데....
        //  아마 react-markdown 라이브러리 버전이 올라가면서 생긴 버그 같다.
        //  node > children 이 다양한 원소를 가지고 있는데 속성을 특정 element에 한정시킨 거 같아 해결이 안되서 우선 any로 작업
        p: ({ node, children }: { node: any; children: any }) => {
            if (node.children[0].tagName === 'img') {
                const image: any = node.children[0];

                return (
                    <div className={classess.image}>
                        <Image
                            src={`/images/posts/${slug}/${image.properties.src}`}
                            alt={image.properties.alt}
                            width="600"
                            height="300"
                        />
                    </div>
                );
            }

            return <p>{children}</p>;
        },

        code: (code: any) => {
            const {
                node: { children },
                className,
            } = code;

            const lang = (className || '').replace('language-', '');

            return (
                <SyntaxHighlighter language={lang} style={atomDark}>
                    {children[0].value}
                </SyntaxHighlighter>
            );
        },
    };

    return (
        <article className={classess.content}>
            <PostHeader title={title} image={imagePath} />
            <ReactMarkdown components={customRenderes}>{content}</ReactMarkdown>
        </article>
    );
};

export default PostContent;
