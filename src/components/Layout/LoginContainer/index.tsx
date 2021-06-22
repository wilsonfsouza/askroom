import { ReactNode } from "react";
import styles from './styles.module.scss';

interface LoginContainerProps {
    children: ReactNode;
}

export function LoginContainer({ children }: LoginContainerProps) {
    return (
        <div className={styles.loginContainer}>
            {children}
        </div>
    )
}

