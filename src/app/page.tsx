import { getPosts } from './postsData'
import styles from './home.module.css'

const posts = getPosts();

export default function HomePage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>My Blog</h1>
      <ul className={styles.postsList}> 
        {posts.map(post => (
          <li key={post.slug}>
            <a href={`/posts/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}