import styles from './styles.module.scss';
import { FormHTMLAttributes, ReactNode } from "react";

interface RoomFormProps extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
}

export function RoomForm({ children, ...rest }: RoomFormProps) {
    return (
        <form className={styles.form} {...rest}>
            {children}
        </form>
    );
}