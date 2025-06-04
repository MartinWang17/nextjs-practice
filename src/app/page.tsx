import { getPosts } from './postsData'

const posts = getPosts();

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