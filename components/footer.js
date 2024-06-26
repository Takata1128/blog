import Logo from "./logo";
import Container from './container'
import styles from '@/styles/footer.module.css'
import Social from "./social";

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <Container>
                <div className={styles.flexContainer}>
                    <Logo />
                </div>
            </Container>
        </footer>
    )
}