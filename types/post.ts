export interface Post {
    title: string;
    image: string;
    excerpt: string;
    date: string;
    slug: string;
    content: string;
}

export interface PostMdMetaData {
    title: string;
    date: string;
    image: string;
    excerpt: string;
    isFeatured: boolean;
}

export interface PostMdData extends PostMdMetaData {
    content: string;
}

export interface PostData extends PostMdData {
    slug: string;
}
