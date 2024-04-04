import Hero from '@/components/hero'
import Container from '@/components/container'
import Meta from '@/components/meta'
import Profile from '@/components/about'

export default function About() {
    return (
        <Container>
            <Meta title="about" description="about page"></Meta>
            <Profile />
        </Container>
    )
}