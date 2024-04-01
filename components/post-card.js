import styles from '@/styles/post-card.module.css'
import parse from 'html-react-parser'
import Image from 'next/image'

export default function PostCard({ post }) {
    return (
        <article className={styles.postCard}>
            <div className={styles.contents}>
                <figure>
                    <Image
                        src={post.eyecatch.url}
                        alt=""
                        fill
                        sizes='(min-width: 1152px) 1152px, 100vw'
                        style={{
                            objectFit: 'cover',
                        }}
                        placeholder="blur"
                        blurDataURL={post.eyecatch.blurDataURL}
                    />
                </figure>
                <h2 className={styles.title}>{post.title}</h2>
                <div className={styles.text}>{removeHTMLTags(post.content)}</div>
            </div>
        </article>
    )
}

function removeHTMLTags(str) {
    return str.replace("<br>", "\n").replace(/<\/?[^>]+(>|$)/g, "");
}