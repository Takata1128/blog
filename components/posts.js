import styles from '@/styles/posts.module.css'
import Image from 'next/image'
import Link from 'next/link'
import PostCard from './post-card'

export default function Posts({ posts }) {
    return (
        <div className={styles.gridContainer}>
            {posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug}>
                    <PostCard post={post} />
                </Link>
            ))}
        </div>
    )
}