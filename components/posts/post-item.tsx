import Link from 'next/link';
import Image from 'next/image';

import classess from './post-item.module.css';
import type { Post } from '../../types/post';

interface PostItemProps {
    post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
    const { title, image, excerpt, date, slug } = post;

    const formattedDate = new Date(date).toLocaleDateString('en-us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const imagePath = `/images/posts/${slug}/${image}`;
    console.log(imagePath);
    const linkPath = `/posts/${slug}`;

    return (
        <li className={classess.post}>
            <Link href={linkPath}>
                <a>
                    <div className={classess.image}>
                        <Image
                            src={imagePath}
                            alt={title}
                            width={300}
                            height={200}
                            layout="responsive"
                        />
                    </div>
                    <div className={classess.content}>
                        <h3>{title}</h3>
                        <time>{formattedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    );
};

export default PostItem;
