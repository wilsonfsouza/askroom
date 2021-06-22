import { Button } from "../Button";
import { BsBoxArrowInRight } from 'react-icons/bs';
import styles from './styles.module.scss';

interface RoomFormProps {
    inputPlaceholder: string;
}

export function RoomForm({ inputPlaceholder }: RoomFormProps) {
    return (
        <form className={styles.form} onSubmit={() => { }}>
            <input
                type="text"
                placeholder={inputPlaceholder}
            />
            <Button type="submit" leftIcon={BsBoxArrowInRight}>Join a room</Button>
        </form>
    );
}