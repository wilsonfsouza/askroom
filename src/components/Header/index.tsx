import styles from './styles.module.scss';
import logoImg from '../../assets/images/logo.svg';
import { RoomCode } from '../RoomCode';

interface HeaderProps {
    code: string;
}

export function Header({ code }: HeaderProps) {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src={logoImg} alt="Askroom" />
                <RoomCode code={code} />
            </div>
        </header>
    );
}