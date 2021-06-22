import { ReactNode } from "react";
import logoImg from "../../../assets/images/logo.svg"
import styles from './styles.module.scss';

interface LoginMainContainerProps {
    children: ReactNode;
}

export function LoginMainContainer({ children }: LoginMainContainerProps) {
    return (
        <main className={styles.loginMainContainer}>
            <div className={styles.loginMainContent}>
                <img src={logoImg} alt="Askroom logo" />
                {children}
            </div>
        </main>
    );
}