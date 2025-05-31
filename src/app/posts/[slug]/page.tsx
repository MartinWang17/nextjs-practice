type PostPageProps = {
    params: { slug: string }
}

const posts = [
    { slug: "first-post", title: "My first post", content: "This is my first post content!" },
    { slug: "Learning-nextjs", title: "Learning Next.js", content: "Learning Next js. This shit confusing" }
];


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