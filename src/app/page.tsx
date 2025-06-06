'use client';
import { useEffect, useState } from 'react'
import { getPosts } from './postsData'

type Post = {
  slug: string;
  title: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <main className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container text-center">
        <h1 className="display-4 text-primary mb-4 text-center">My Blogs</h1>
            <ul className="list-group shadow"> 
              {posts.map(post => (
                <li key={post.slug} className="list-group-item">
                  <a href={`/posts/${post.slug}`} className="fw-bold text-decoration-none text-dark">
                    {post.slug}
                  </a>
                </li>
              ))}
            </ul>
      </div>
    </main>
  );
}