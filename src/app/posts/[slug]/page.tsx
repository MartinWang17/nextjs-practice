type Post = {
  slug: string;
  title: string;
  content: string;
}

type PostPageProps = {
    params: { slug: string }
}

async function getPosts(): Promise<Post[]> {
    const res = await fetch('http://localhost:8000/posts', {cache: 'no-store'});
    return res.json();
}

export default async function PostPage({ params }: PostPageProps) {
    const posts = await getPosts();
    const post = posts.find(p => p.slug === params.slug);

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