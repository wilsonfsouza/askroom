import { FormEvent, useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { useAuthentication } from '../hooks/useAuthentication';
import { database } from '../services/firebase';
import styles from '../styles/pages/room.module.scss';

type FirebaseQuestions = Record<string, {
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
}>

type Question = {
    id: string;
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
}

type RoomParams = {
    id: string;
}

export function Room() {
    const { user } = useAuthentication();
    const params = useParams<RoomParams>();
    const roomId = params.id;

    const [newQuestion, setNewQuestion] = useState('');
    const [questions, setQuestions] = useState<Question[]>([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`);

        roomRef.once('value', room => {
            const databaseRoom = room.val();

            const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    ...value
                }
            })

            setTitle(databaseRoom.title);
            setQuestions(parsedQuestions);
        })
    }, [roomId]);

    async function handleSendNewQuestion(event: FormEvent) {
        event.preventDefault();

        if (newQuestion.trim() === '') {
            return;
        }

        if (!user) {
            toast.error('You must be logged in', {
                position: 'top-center'
            })
        }

        const question = {
            content: newQuestion,
            author: {
                avatar: user?.avatar,
                name: user?.name
            },
            isHighlighted: false,
            isAnswered: false
        };

        await database.ref(`rooms/${roomId}/questions`).push(question);

        toast.success('Your question was added to the list', {
            position: 'top-center'
        })

        setNewQuestion('');
    }

    return (
        <div>
            <Header code={roomId} />
            <main className={styles.content}>
                <div className={styles.roomTitle}>
                    <h1>Room {title}</h1>
                    {questions.length > 0 && (<span>{questions.length} question(s)</span>)}
                </div>

                <form className={styles.form} onSubmit={handleSendNewQuestion}>
                    <textarea
                        placeholder="What would you like to know?"
                        onChange={(event) => setNewQuestion(event.target.value)}
                        value={newQuestion}
                    />
                    <div className={styles.formFooter}>
                        {user
                            ? (
                                <div className={styles.userInfo}>
                                    <img src={user.avatar} alt={user.name} />
                                    <span>{user.name}</span>
                                </div>
                            )
                            : (<span><button>Sign in</button> to send a question</span>)}
                        <Button type="submit" disabled={!user} style={{ maxWidth: '12rem' }}>Send a question</Button>
                    </div>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                </form>
                {JSON.stringify(questions)}
            </main>
        </div>
    )
}