import { getPosts } from '../../postsData';

const posts = getPosts();

type PostPageProps = {
    params: { slug: string }
}

export default async function PostPage({ params }: PostPageProps) {
    const resolvedParams = await params;
    const post = posts.find(p => p.slug === resolvedParams.slug);

    if (!post) {
        return <main><h1>404 - Post Not Found</h1></main>;
    }

    return (
        <main className="container py-5">
            <h1 className="display-4 text-primary mb-4 text-center">Blog post: {post.title}</h1>
            <p>{post.content}</p>
        </main>
    )
}