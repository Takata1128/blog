export function prevNextPost(allSlugs, currentSlug) {
    const numberOfPosts = allSlugs.length;

    const index = allSlugs.findIndex(({ slug }) => slug === currentSlug);

    const prevPost = index + 1 === numberOfPosts ? null : allSlugs[index + 1];
    const nextPost = index === 0 ? null : allSlugs[index - 1];

    return [
        prevPost,
        nextPost,
    ]
}