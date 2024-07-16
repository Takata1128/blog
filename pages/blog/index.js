import Hero from '@/components/hero'
import Container from '@/components/container'
import { getAllPosts } from '@/lib/api'
import Meta from '@/components/meta';
import Posts from '@/components/posts';
import { eyecatchLocal } from '@/lib/constants';
import { getPlaiceholder } from 'plaiceholder';
import { getImageBuffer } from '@/lib/image-buffer';

export default function Blog({ posts }) {
    return (
        <Container>
            <Meta pageTitle="ブログ" pageDesc="記事一覧" />
            <Hero
                title="Blog"
                subtitle="記事一覧"
            />
            <Posts posts={posts} />
        </Container>
    )
}

export async function getStaticProps() {
    const posts = await getAllPosts();

    for (const post of posts) {
        if (!post.hasOwnProperty('eyecatch')) {
            post.eyecatch = eyecatchLocal
        }
        const imageBuffer = await getImageBuffer(post.eyecatch.url);
        const { base64 } = await getPlaiceholder(imageBuffer);
        post.eyecatch.blurDataURL = base64;
    }

    return {
        props: {
            posts: posts
        }
    }
}