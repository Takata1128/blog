import styles from '@/styles/about.module.css'
import me from '@/images/me.jpg'
import Image from 'next/image';
import Social from '@/components/social';

export default function Profile() {
    return (
        <div className={styles.container}>
            <div className={styles.thumb}>
                <Image
                    src={me}
                    alt=""
                    width={200}
                    height={200}
                    priority
                    placeholder='blur'
                />
            </div>
            <div className={styles.content}>
                <div className={styles.name}>roka</div>
                <div className={styles.intro}>beatmaniaとBMSを中心に音楽ゲームをよく遊んでいます。</div>
            </div>
            <Social />
        </div>
    );
}