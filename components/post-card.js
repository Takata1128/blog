import styles from '@/styles/post-card.module.css'
import parse from 'html-react-parser'
import Image from 'next/image'

export default function PostCard({ post, key }) {
    console.log(post);
    return (
        <article className={styles.postCard} key={key}>
            <div className={styles.contents}>
                <figure>
                    <Image
                        src={post.eyecatch.url}
                        alt=""
                        fill
                        style={{
                            objectFit: 'cover',
                        }}
                        placeholder="blur"
                        blurDataURL={post.eyecatch.blurDataURL}
                    />
                </figure>
                <h2>{post.title}</h2>
                <p>{parse(post.content, {
                    replace: (node) => {
                        if (node.name === 'img') {
                            const { src, alt, width, height } = node.attribs;
                            return (
                                <></>
                            );
                        }
                    },
                })}</p>
            </div>
        </article>
    )
}