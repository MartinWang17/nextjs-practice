

const posts = [
  { slug: "first-post", title: "My first post" },
  { slug: "Learning-nextjs", title: "Learning Next.js" },
];

export default function HomePage() {
  return (
    <main>
      <h1>My Blog</h1>
      <ul> 
        {posts.map(post => (
          <li key={post.slug}>
            <a href={`/posts/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}