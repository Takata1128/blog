import Head from 'next/head'
import { siteMeta } from '@/lib/constants'
import { useRouter } from 'next/router';
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

import siteImg from '@/images/ogp.png'

export default function Meta({ pageTitle, pageDesc, pageImg, pageImgW, pageImgH }) {
    const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;

    const desc = pageDesc ?? siteDesc;

    const router = useRouter();
    const url = `${siteUrl}${router.asPath}`

    // ogp image
    const img = pageImg || siteImg.src;
    const width = pageImgW || siteImg.width;
    const height = pageImgH || siteImg.height;
    const imgUrl = img.startsWith('https') ? img : `${siteUrl}${img}`;

    return (
        <Head>
            <title>{title}</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta
                name="description"
                content={desc}
            />
            <meta
                property="og:title"
                content={title}
            />
            <meta
                property="og:description"
                content={desc}
            />
            <meta
                property="og:image"
                content={imgUrl}
            />
            <meta
                property="og:image:width"
                content={width}
            />
            <meta
                property="og:image:height"
                content={height}
            />
            <link rel="canonical" href={url} />
            <meta
                property="og:url"
                content={url}
            />
            <meta property="og:site_name" content={siteTitle} />
            <meta
                property="og:type"
                content={siteType}
            />
            <meta
                property="og:locale"
                content={siteLocale}
            />
            <link rel="icon" href={siteIcon} />
            <link rel="apple-touch-icon" href={siteIcon} />
            <meta
                name="twitter:card"
                content="summary_large_image"
            />
        </Head>
    )
}
