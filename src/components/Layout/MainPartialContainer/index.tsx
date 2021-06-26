import { ReactNode } from "react";
import logoImg from "../../../assets/images/logo.svg"
import styles from './styles.module.scss';

interface MainPartialContainerProps {
    children: ReactNode;
}

export function MainPartialContainer({ children }: MainPartialContainerProps) {
    return (
        <main className={styles.mainContainer}>
            <div className={styles.mainContent}>
                <img src={logoImg} alt="Askroom logo" />
                {children}
            </div>
        </main>
    );
}