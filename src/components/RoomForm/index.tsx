import styles from './styles.module.scss';
import { ReactNode } from "react";

interface RoomFormProps {
    inputPlaceholder: string;
    children: ReactNode;
}

export function RoomForm({ inputPlaceholder, children }: RoomFormProps) {
    return (
        <form className={styles.form} onSubmit={() => { }}>
            <input
                type="text"
                placeholder={inputPlaceholder}
            />
            {children}
        </form>
    );
}