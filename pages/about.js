import Hero from '@/components/hero'
import Container from '@/components/container'
import PostBody from '@/components/post-body'
import Contact from '@/components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from '@/components/two-column'
import Image from 'next/image'
import eyecatch from '@/images/cat.png'
import Meta from '@/components/meta'

export default function About() {
    return (
        <Container>
            <Meta title="about" description="about page"></Meta>
            <Hero
                title="About"
                subtitle="This is the about page"
            />
            <figure>
                <Image
                    src={eyecatch}
                    alt="cat"
                    layout="responsive"
                    sizes='(max-width: 1152px) 1152px, 100vw'
                    priority
                    placeholder="blur"
                />
            </figure>
            <TwoColumn>
                <TwoColumnMain>
                    <PostBody>
                        <p>
                            This is the about page content.
                        </p>
                    </PostBody>
                </TwoColumnMain>
                <TwoColumnSidebar>
                    <Contact />
                </TwoColumnSidebar>
            </TwoColumn>
        </Container>
    )
}