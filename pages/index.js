import Hero from '@/components/hero'
import Container from '@/components/container'
import Meta from '@/components/meta'
import { getAllPosts } from '@/lib/api'
import { getPlaiceholder } from 'plaiceholder'
import { getImageBuffer } from '@/lib/image-buffer'
import Posts from '@/components/posts'
import Pagination from '@/components/pagenation'
import { eyecatchLocal } from '@/lib/constants'

export default function Home({ posts }) {
    return (
        <Container>
            <Meta title="home" description="home page"></Meta>
            <Hero
                title="ろか日記"
                subtitle="自分のための日記や備忘録を書いていきます"
                imageOn
            />
            <Posts posts={posts} />
            <Pagination nextUrl="/blog" nextText="More Posts" />
        </Container>
    )
}

export async function getStaticProps() {
    const posts = await getAllPosts(4);

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