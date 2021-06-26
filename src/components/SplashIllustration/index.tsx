import illustrationImg from '../../assets/images/illustration.svg';
import styles from './styles.module.scss';

export function SpashIllustration() {
    return (
        <aside className={styles.asideIllustration}>
            <img src={illustrationImg} alt="Splash Illustration showing questions and answers" />
            <strong>Create live Q&amp;A rooms</strong>
            <p>Answer your audience in real time</p>
        </aside>
    );
}