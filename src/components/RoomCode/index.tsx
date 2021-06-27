import styles from './styles.module.scss';
import { FiCopy } from 'react-icons/fi';

interface RoomCodeProps {
    code: string;
}

export function RoomCode({ code }: RoomCodeProps) {
    function handleCopyRoomCodeToClipboard() {
        navigator.clipboard.writeText(code)
    }

    return (
        <button
            className={styles.roomCodeContainer}
            tabIndex={0}
            onClick={handleCopyRoomCodeToClipboard}
        >
            <div>
                <FiCopy />
            </div>
            <span>Room #{code}</span>
        </button>
    );
}