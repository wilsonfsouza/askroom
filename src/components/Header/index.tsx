import styles from './styles.module.scss';
import logoImg from '../../assets/images/logo.svg';
import { RoomCode } from '../RoomCode';
import { Button } from '../Button';

interface HeaderProps {
    code: string;
    isAdminRoom?: boolean;
}

export function Header({ code, isAdminRoom }: HeaderProps) {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src={logoImg} alt="Askroom" />
                <div>
                    <RoomCode code={code} />
                    {isAdminRoom && (<Button style={{ width: '10rem', height: '2.5rem' }} isOutlined>Close Room</Button>)}
                </div>
            </div>
        </header>
    );
}