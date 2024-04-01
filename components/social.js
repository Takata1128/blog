import styles from '@/styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Social({ iconSize = 'initial' }) {
    return (
        <ul className={styles.list} style={{ '--icon-size': iconSize }}>
            <li>
                <a href="https://twitter.com/rokahikou1">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <span className="sr-only">Twitter</span>
            </li>
            <li>
                <a href="https://github.com/Takata1128">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
            <span className="sr-only">Github</span>
        </ul>
    )
}