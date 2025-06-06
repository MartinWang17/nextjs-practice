import { getPosts } from './postsData'

const posts = getPosts();

export default function HomePage() {
  return (
    <main className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container text-center">
        <h1 className="display-4 text-primary mb-4 text-center">My Blogs</h1>
            <ul className="list-group shadow"> 
              {posts.map(post => (
                <li key={post.slug} className="list-group-item">
                  <a href={`/posts/${post.slug}`} className="fw-bold text-decoration-none text-dark">
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
      </div>
    </main>
  );
}