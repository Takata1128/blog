import { getPostBySlug, getAllSlugs } from "@/lib/api"
import Container from "@/components/container"
import PostHeader from "@/components/post-header";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/components/two-column";
import PostBody from "@/components/post-body";
import ConvertBody from "@/components/convert-body";
import PostCategories from "@/components/post-categories";
import { extractText } from "@/lib/extract-text";
import Meta from "@/components/meta";
import { eyecatchLocal } from "@/lib/constants";
import { getImageBuffer } from "@/lib/image-buffer";
import { prevNextPost } from "@/lib/prev-next-post";
import Pagination from "@/components/pagenation";

export default function Post({
    title,
    publish,
    content,
    eyecatch,
    categories,
    description,
    prevPost,
    nextPost
}) {
    return (
        <Container>
            <Meta
                pageTitle={title}
                pageDesc={description}
                pageImg={eyecatch.url}
                pageImgWidth={eyecatch.width}
                pageImgHeight={eyecatch.height}
            />
            <article>
                <PostHeader title={title} subtitle="Blog Article" publish={publish} />
                <figure>
                    <Image key={eyecatch.url} src={eyecatch.url} alt="" layout="responsive" width={eyecatch.width} height={eyecatch.height} sizes="{min-width: 1152px} 1152px, 100vw" priority placeholder="blur" blurDataURL={eyecatch.blurDataURL} />
                </figure>
                <TwoColumn>
                    <TwoColumnMain>
                        <PostBody>
                            <ConvertBody content={content} />
                        </PostBody>
                    </TwoColumnMain>
                    <TwoColumnSidebar>
                        <PostCategories categories={categories} />
                    </TwoColumnSidebar>
                </TwoColumn>
                <Pagination
                    prevText={prevPost ? prevPost.title : ''} prevUrl={prevPost ? `/blog/${prevPost.slug}` : ''} nextText={nextPost ? nextPost.title : ''} nextUrl={nextPost ? `/blog/${nextPost.slug}` : ''}
                />
            </article>
        </Container>
    )
}

export async function getStaticPaths() {
    const allSlugs = await getAllSlugs();
    return {
        paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const slug = context.params.slug;

    const post = await getPostBySlug(slug);

    const description = extractText(post.content);

    const eyecatch = post.eyecatch ?? eyecatchLocal;

    const imageBuffer = await getImageBuffer(eyecatch.url);
    const { base64 } = await getPlaiceholder(imageBuffer);
    eyecatch.blurDataURL = base64;

    const allSlugs = await getAllSlugs();
    const [prevPost, nextPost] = prevNextPost(allSlugs, slug);

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: eyecatch,
            categories: post.categories,
            description: description,
            prevPost: prevPost,
            nextPost: nextPost,
        }
    }
}