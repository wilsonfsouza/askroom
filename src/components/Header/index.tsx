import styles from './styles.module.scss';
import logoImg from '../../assets/images/logo.svg';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src={logoImg} alt="Askroom" />
                <div>Room code</div>
            </div>
        </header>
    );
}