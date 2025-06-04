import { getPosts } from '../../postsData';

const posts = getPosts();

type PostPageProps = {
    params: { slug: string }
}

export default async function PostPage({ params }: PostPageProps) {
    const post = posts.find(p => p.slug === params.slug);

    if (!post) {
        return <main><h1>404 - Post Not Found</h1></main>;
    }

    return (
        <main>
            <h1>Blog post: {post.title}</h1>
            <p>{post.content}</p>
        </main>
    )
}