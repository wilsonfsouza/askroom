import { useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import styles from '../styles/pages/room.module.scss';

type RoomParams = {
    id: string;
}

export function Room() {
    const params = useParams<RoomParams>();

    return (
        <div>
            <Header code={params.id} />
            <main className={styles.content}>
                <div className={styles.roomTitle}>
                    <h1>Room React</h1>
                    <span>4 questions</span>
                </div>

                <form className={styles.form}>
                    <textarea
                        placeholder="What would you like to know?"
                    />
                    <div className={styles.formFooter}>
                        <span><button>Sign in</button> to send a question</span>
                        <Button type="submit">Send a question</Button>
                    </div>
                </form>
            </main>
        </div>
    )
}